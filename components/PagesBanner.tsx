export default function PagesBanner({ title, image }: { title: string; image: string }) {
    return (
        <div
            className="ttm-page-title-row"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="pageBanner ttm-page-title-row-inner py-10">
                <div className="container">
                    <div className="row items-center">
                        <div className="col-lg-12 text-white text-center" style={{position: 'relative'}}>
                            <div className="page-title-heading">
                                <h2 className="text-4xl font-bold">{title}</h2>
                            </div>
                            <div className="breadcrumb-wrapper mt-4">
                                <div className="breadcrumb-wrapper-inner text-sm">
                                    <span>
                                        <a href="/" className="text-white hover:text-[#cda274]">
                                            <i className="themifyicon ti-home"></i>&nbsp;&nbsp;Home
                                        </a>
                                    </span>
                                    <span className="mx-2">/</span>
                                    <span>{title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
