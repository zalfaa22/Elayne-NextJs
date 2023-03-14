import data from "../display";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Card() {
  const [keyword, setKeyword] = useState("");
  const [hasilFilter, setHasilfilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handlefilter = (e) => {
    const filterData = data.filter((e) => {
      return e.category.toLowerCase().includes(keyword.toLowerCase());
    });
    setHasilfilter(filterData);
  };
  console.log(keyword);

  useEffect(() => {
    handlefilter();
  }, [data, keyword]);

  function getFiltered(filtered) {
    if (filtered === 0) {
      return "Barang Tidak Ada";
    } else {
      return filtered + " Products ";
    }
  }

  return (
    <>
      <div className="p-7 text-black z-[2] mt-24">
        <h1 className="text-2xl font-bold text-center">Popular Products</h1>
      </div>
      <div className="templateContainer">
        <div className="template_Container items-center justify-center grid relative grid-cols-[repeat(4,1fr)] mx-auto my-0 px-[5%] p-[2%]">
          {hasilFilter.length > 0
            ? hasilFilter
                .filter((products) =>
                  searchTerm !== ""
                    ? products.name.toLowerCase().includes(searchTerm)
                    : products
                )
                .map((item) => (
                  <Link
                    href={`/${item.id}`}
                    key={item.id}
                  >
                    <div className="template bg-white border-0 justify-center items-center m-5 p-5 rounded-[5px] border-solid border-[#a7a7a7] hover:transition-[0.4s] hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.4)] hover:z-[3] hover:scale-110">
                      <img
                        src={item.image}
                        alt=""
                        className="h-[200px] w-[200px] border mt-[5px] mb-5 mx-1 rounded-[10px] "
                      />
                      <h3 className="card-name font-bold mb-3">{item.name}</h3>
                      <p className="card-text ">{item.description}</p>
                    </div>
                  </Link>
                ))
            : data
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => {
                  return (
                    <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3 className="card-name">{val.name}</h3>
                      <p className="card-text">{val.description}</p>
                      <p className="price">Rp {val.price}</p>
                    </div>
                  );
                })}
        </div>
      </div>
    </>
  );
}

export default Card;
