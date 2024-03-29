// import data from "../data";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Card() {
  const [keyword, setKeyword] = useState("");
  const [hasilFilter, setHasilfilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

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

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/640fae82ebd26539d08e293e"
        );
        const data = await response.json();
        setData(data.record);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div className="p-7 text-black z-[2] mt-20">
        <h1 className="text-3xl font-bold  text-center">Products</h1>
      </div>
      <div className="templateContainer">
        <div className="searchInput_Container flex items-center justify-center mx-auto my-0 pt-5 ">
          <input
            className="border w-3/12 p-2.5 rounded-[10px] border-solid border-black"
            id="searchInput"
            type="text "
            placeholder="Search Here"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />

          <div className="filter-area">
            <form onChange={handlefilter}>
              <select
                className="filter border h-[45px] w-[110px] mx-2.5 my-0 rounded-[10px] border-solid border-black"
                name="isAvailable"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              >
                <option value="">All</option>
                <option value="Mug">Mug</option>
                <option value="Plate">Plate</option>
                <option value="Teapot">Teapot</option>
              </select>
            </form>
          </div>
        </div>

        <div className="information w-1/5 text-center mx-auto my-0 pt-2.5">
          {getFiltered(hasilFilter.length)}
        </div>

        <div className="template_Container items-center justify-center grid relative grid-cols-[repeat(4,1fr)] mx-auto my-0 px-[5%] p-[2%] ">
          {hasilFilter.length > 0
            ? hasilFilter
                .filter((products) =>
                  searchTerm !== ""
                    ? products.name.toLowerCase().includes(searchTerm)
                    : products
                )
                .map((item) => (
                  <Link href={`/${item.id}`} key={item.id}>
                    <div className="template bg-white border justify-center items-center m-5 p-5 rounded-[10px] border-solid border-[#cbcbcb] hover:transition-[0.4s] hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.4)] hover:z-[3] hover:scale-110">
                      <img
                        src={item.image}
                        alt=""
                        className="h-[200px] w-[200px] border-0 mt-[5px] mb-5 mx-1 rounded-[10px] border-solid border-black"
                      />
                      <h3 className="card-name font-bold mb-3">{item.name}</h3>
                      <p className="card-text ">{item.description}</p>
                      <p className="price font-semibold mt-3">
                        Rp. {item.price}
                      </p>
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
                      <button className="px-8 py-2 border">Book</button>
                    </div>
                  );
                })}
        </div>
      </div>
    </>
  );
}

export default Card;
