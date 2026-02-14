"use client";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "react-bootstrap/Modal";
import { IProductDT } from "@/types/product-d-t";
import { Link } from "@/navigation";

// prop type
type IProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setProductItem: React.Dispatch<React.SetStateAction<IProductDT | null>>;
  productItem: IProductDT;
};

export default function ProductModal({ showModal, setShowModal, productItem, setProductItem }: IProps) {
  const { relatedImages, title, category, price, id, img } = productItem || {};
  const [activeImg, setActiveImg] = React.useState<StaticImageData | null>(img);
  const [quantity, setQuantity] = React.useState(1);
  useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImg, img])
  const handleClose = () => {
    setShowModal(false);
    setProductItem(null);
  };
  return (
    <Modal show={showModal} onHide={handleClose} centered={true} className="tp-product-modal">

      <button
        onClick={handleClose}
        type="button"
        className="tp-product-modal-close-btn"
      >
        <i className="fa-regular fa-xmark"></i>
      </button>

      <Modal.Body>
        {productItem && (
          <div className="tp-product-modal-content d-lg-flex align-items-start">
            <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
              <nav>
                <div className="nav nav-tabs flex-sm-column ">
                  {relatedImages.map((imgSrc, i) => (
                    <button
                      key={i}
                      className={`nav-link ${activeImg === imgSrc ? "active" : ""}`}
                      type="button"
                      onClick={() => setActiveImg(imgSrc)}
                    >
                      <Image
                        src={imgSrc}
                        alt="nav-img"
                        width={90}
                        height={100}
                        style={{ objectFit: "cover" }}
                      />
                    </button>
                  ))}
                </div>
              </nav>

              <div className="m-img">
                <div className="tp-product-details-nav-main-thumb">
                  {activeImg && (
                    <Image
                      src={activeImg}
                      alt="main-thumb"
                      width={396}
                      height={465}
                      style={{ width: "100%", height: "auto", maxWidth: "396px" }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="tp-product-details-wrapper">
              <div className="tp-product-details-category">
                <span>{category}</span>
              </div>
              <h3 className="tp-product-details-title">
                {title}
              </h3>

              {/* inventory details */}
              <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                <div className="tp-product-details-stock mb-10">
                  <span>In Stock</span>
                </div>
                <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                  <div className="tp-product-details-rating">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <div className="tp-product-details-reviews">
                    <span>(36 Reviews)</span>
                  </div>
                </div>
              </div>
              <p>
                A Screen Everyone Will Love: Whether your family is streaming or
                video chatting with friends tablet A8... <span>See more</span>
              </p>

              {/* price */}
              <div className="tp-product-details-price-wrapper mb-20">
                <span className="tp-product-details-price old-price">
                  $320.00
                </span>
                <span className="tp-product-details-price new-price">
                  $236.00
                </span>
              </div>

              {/* actions */}
              <div className="tp-product-details-action-wrapper">
                <Link href="/contact" className="tp-btn-black-2 text-center w-100">
                  Contact For Inquiry
                </Link>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

