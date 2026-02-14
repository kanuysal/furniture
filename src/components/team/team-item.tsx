import React from "react";
import Image from "next/image";
import { ITeamDT } from "@/types/team-d-t";
import Link from "next/link";

// prop type 
type IProps = {
  item: ITeamDT;
  handleTeamModal(team: ITeamDT): void;
}

export default function TeamItem({ item, handleTeamModal }: IProps) {
  return (
    <div className="tp-team-item tp-hover-btn-wrapper marque fix mb-30">
      <div className="tp-hover-btn-item p-relative" style={{ height: '464px', width: '100%' }}>
        <Image
          fill
          src={item.image}
          alt="team-img"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="tp-team-content">
        <span>{item.designation}</span>
        <h4
          className="tp-team-title-sm"
          onClick={() => handleTeamModal(item)}
        >
          <Link href={`/team-details/${item.id}`}>{item.name}</Link>
        </h4>
      </div>
    </div>
  );
}
