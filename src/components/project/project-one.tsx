"use client";
import React from "react";
import ProjectTextLine from "./project-text-line";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

// type
type IProject = {
  id: number;
  cls: string;
  cls_2: string;
  img: string;
  title: string;
};

// prop type
type IProps = {
  style_2?: boolean;
};

const ProjectOne = ({ style_2 = false }: IProps) => {
  const t = useTranslations('Projects');
  const tCommon = useTranslations('Common');

  const project_data: IProject[] = [
    {
      id: 1,
      cls: "tp-project-mr",
      cls_2: "height-1",
      img: "/assets/images/avangard/avangard-8-1720x624.jpg",
      title: t('item1_title'),
    },
    {
      id: 2,
      cls: "text-end",
      cls_2: "height-2 d-inline-flex justify-content-end",
      img: "/assets/images/masif/masif-7-2016x1344.jpg",
      title: t('item2_title'),
    },
    {
      id: 3,
      cls: "tp-project-mr",
      cls_2: "height-3",
      img: "/assets/images/sofa/sofa-2-1800x900.jpg",
      title: t('item3_title'),
    },
    {
      id: 4,
      cls: "",
      cls_2: "height-4",
      img: "/assets/images/avangard/avangard-5-2169x1447.jpg",
      title: t('item4_title'),
    },
    {
      id: 5,
      cls: "tp-project-ml",
      cls_2: "height-5",
      img: "/assets/images/masif/masif-13-2433x1623.jpg",
      title: t('item5_title'),
    },
    {
      id: 6,
      cls: "",
      cls_2: "height-6",
      img: "/assets/images/sofa/sofa-3-1934x1289.jpg",
      title: t('item6_title'),
    },
  ];

  function ProjectItem({ item }: { item: IProject }) {
    return (
      <div className={`tp-project-item ${item.cls} mb-200`}>
        <div
          className={`tp-project-img ${item.cls_2} fix not-hide-cursor`}
          data-cursor={tCommon('view_gallery')}
        >
          <Link className="cursor-hide d-block w-100 h-100" href="/portfolio-grid-col-3">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                fill
                src={item.img}
                alt="project-img"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`${style_2 ? "tp-project-area-2" : "tp-project-area"} fix`}>
        {!style_2 && (
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <ProjectTextLine />
              </div>
            </div>
          </div>
        )}
        <div className="tp-project-gallery-wrapper">
          <div className="container container-1630">
            <div className="tp-project-gallery-top pb-50">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-left-wrap">
                    {project_data.slice(0, 3).map((item, i) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-right-wrap">
                    {project_data.slice(3, 6).map((item) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}

                    <div className="tp-project-btn tp-btn-trigger">
                      <div className="tp-btn-bounce">
                        <Link
                          className="tp-btn-border"
                          href="/portfolio-grid-col-3"
                        >
                          <span className="tp-btn-border-wrap">
                            <span className="text-1">{t('view_all')}</span>
                            <span className="text-2">{t('view_all')}</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!style_2 && (
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-xl-12">
                  <div className="tp-project-full-img-wrap p-relative fix">
                    <div
                      className="tp-project-full-img"
                      data-speed="auto"
                      style={{
                        backgroundImage:
                          "url(/assets/images/sofa/sofa-4-1800x1012.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectOne;
