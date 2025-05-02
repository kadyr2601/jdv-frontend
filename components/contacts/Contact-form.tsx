"use client"
import React, {useEffect, useState} from "react"

interface FormData {
    fname: string
    lname: string
    email: string
    phone: string
    message: string
    cookiesConsent: boolean
}

// Create a separate interface for errors that allows string messages
interface FormErrors {
    fname?: string
    lname?: string
    email?: string
    phone?: string
    message?: string
    cookiesConsent?: string
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
        cookiesConsent: false,
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

    const validateForm = () => {
        const newErrors: FormErrors = {}

        if (!formData.fname.trim()) newErrors.fname = "First name is required"
        if (!formData.lname.trim()) newErrors.lname = "Last name is required"

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid"
        }

        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        if (!formData.message.trim()) newErrors.message = "Message is required"

        // Make the checkbox required
        if (!formData.cookiesConsent) {
            newErrors.cookiesConsent = "You must check this box to submit the form"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Reset states
        setSubmitSuccess(false)
        setSubmitError(null)

        // Validate form
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch(`${process.env.API_URL}/api/others/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.fname,
                    last_name: formData.lname,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    "cookies-consent": "yes", // Always send "yes" if form is submitted (since checkbox is required)
                    _token: document.querySelector('input[name="_token"]')?.getAttribute("value") || "",
                }),
            })

            if (response.status === 201) {
                setSubmitSuccess(true)

                // Reset form
                setFormData({
                    fname: "",
                    lname: "",
                    email: "",
                    phone: "",
                    message: "",
                    cookiesConsent: false,
                })
            } else {
                const data = await response.json()
                setSubmitError(data.message || "Something went wrong. Please try again.")
            }
        } catch (error) {
            setSubmitError("Network error. Please check your connection and try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 767) {
            setIsMobile(true);
        }
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return (
        <div className={`ttm-bg ttm-col-bgcolor-yes ttm-right-span ${!isMobile ? 'spacing-12' : ''}`}>
            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
            <div className="layer-content">
                <h2 className="title">Send Your Message To Us</h2>

                {submitSuccess && (
                    <div
                        className="alert alert-success"
                        style={{
                            marginBottom: "20px",
                            padding: "15px",
                            borderRadius: "5px",
                            backgroundColor: "#dff0d8",
                            borderColor: "#d6e9c6",
                            color: "#3c763d",
                        }}
                    >
                        <div className="alert-icon" style={{ float: "left", marginRight: "10px" }}>
                            <i className="flaticon flaticon-check"></i>
                        </div>
                        <div className="alert-content">
                            <p style={{ margin: "0", color: 'black' }}>Your message has been sent successfully. We'll get back to you soon.</p>
                        </div>
                        <div style={{ clear: "both" }}></div>
                    </div>
                )}

                {submitError && (
                    <div
                        className="alert alert-danger"
                        style={{
                            marginBottom: "20px",
                            padding: "15px",
                            borderRadius: "5px",
                            backgroundColor: "#f2dede",
                            borderColor: "#ebccd1",
                            color: "#a94442",
                        }}
                    >
                        <div className="alert-icon" style={{ float: "left", marginRight: "10px" }}>
                            <i className="flaticon flaticon-cancel"></i>
                        </div>
                        <div className="alert-content">
                            <h4 style={{ margin: "0 0 5px 0", fontSize: "18px" }}>Error</h4>
                            <p style={{ margin: "0" }}>{submitError}</p>
                        </div>
                        <div style={{ clear: "both" }}></div>
                    </div>
                )}

                <div className="padding_top30">
                    <form
                        id="contact_form"
                        className="contact_form wrap-form clearfix"
                        method="post"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <input type="hidden" name="_token" value="ogSV5xY7evgNB19862uOdqsBOueBqZZSQNENbLKU" autoComplete="off" />
                        <div className="row ttm-boxes-spacing-20px">
                            <div className="col-md-6">
                                <label>
                  <span className="text-input">
                    <input
                        name="fname"
                        type="text"
                        placeholder="First Name..."
                        required
                        value={formData.fname}
                        onChange={handleChange}
                        style={errors.fname ? { borderColor: "#a94442" } : {}}
                    />
                  </span>
                                    {errors.fname && (
                                        <p style={{ color: "#a94442", fontSize: "12px", marginTop: "5px" }}>{errors.fname}</p>
                                    )}
                                </label>
                            </div>
                            <div className="col-md-6">
                                <label>
                  <span className="text-input">
                    <input
                        name="lname"
                        type="text"
                        placeholder="Last Name..."
                        required
                        value={formData.lname}
                        onChange={handleChange}
                        style={errors.lname ? { borderColor: "#a94442" } : {}}
                    />
                  </span>
                                    {errors.lname && (
                                        <p style={{ color: "#a94442", fontSize: "12px", marginTop: "5px" }}>{errors.lname}</p>
                                    )}
                                </label>
                            </div>
                            <div className="col-md-6">
                                <label>
                  <span className="text-input">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address..."
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={errors.email ? { borderColor: "#a94442" } : {}}
                    />
                  </span>
                                    {errors.email && (
                                        <p style={{ color: "#a94442", fontSize: "12px", marginTop: "5px" }}>{errors.email}</p>
                                    )}
                                </label>
                            </div>
                            <div className="col-md-6">
                                <label>
                  <span className="text-input">
                    <input
                        name="phone"
                        type="text"
                        placeholder="Phone Number..."
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        style={errors.phone ? { borderColor: "#a94442" } : {}}
                    />
                  </span>
                                    {errors.phone && (
                                        <p style={{ color: "#a94442", fontSize: "12px", marginTop: "5px" }}>{errors.phone}</p>
                                    )}
                                </label>
                            </div>
                            <div className="col-md-12">
                                <label>
                  <span className="text-input">
                    <textarea
                        name="message"
                        cols={50}
                        rows={5}
                        placeholder="Enter Message Here..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                        style={errors.message ? { borderColor: "#a94442" } : {}}
                    ></textarea>
                  </span>
                                    {errors.message && (
                                        <p style={{ color: "#a94442", fontSize: "12px", marginTop: "5px" }}>{errors.message}</p>
                                    )}
                                </label>
                            </div>
                            <div className="col-lg-12">
                                <p className="cookies" style={errors.cookiesConsent ? { color: "#a94442" } : {}}>
                                    <input
                                        id="cookies-consent"
                                        name="cookiesConsent"
                                        type="checkbox"
                                        checked={formData.cookiesConsent}
                                        onChange={handleChange}
                                        style={errors.cookiesConsent ? { borderColor: "#a94442" } : {}}
                                    />
                                    <label htmlFor="cookies-consent" style={errors.cookiesConsent ? { color: "#a94442" } : {}}>
                                        Save my name, email in this browser for the next time Send message
                                    </label>
                                </p>
                                {errors.cookiesConsent && (
                                    <p style={{ color: "#a94442", fontSize: "12px", marginTop: "5px" }}>{errors.cookiesConsent}</p>
                                )}
                                <button
                                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-squar ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-skincolor mt-15"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Post Comment"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
