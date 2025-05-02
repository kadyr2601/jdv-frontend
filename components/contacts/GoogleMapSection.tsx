export default function GoogleMapSection() {
    return (
        <div id="google_map" className="google_map">
            <div className="map_container">
                <div id="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.082689780821!2d55.17133227533274!3d25.09623237776868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6be34e4769f7%3A0xe687dbff88f33e9a!2sBusiness%20Central%20Towers!5e0!3m2!1sen!2sae!4v1713729822531!5m2!1sen!2sae"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
