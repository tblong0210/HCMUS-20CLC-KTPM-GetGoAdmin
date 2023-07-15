import React, { useState, useMemo } from "react";
import classes from "./accounts.module.scss";
import Filter from "../../components/Layout/DefaultLayout/Filter/index";
import { CreateAccountBtn, CustomizeBtn } from "../../components/Layout/DefaultLayout/Button";
import Pagination from "../../components/Layout/DefaultLayout/Pagination/Pagination";
import { ic_lock, ic_trash, ic_unlock, ic_view, ic_edit } from "../../assets/icons";
import CreateAccountForm from "../../components/Layout/DefaultLayout/Form/CreateAccountForm";

const filters = [
  {
    title: "Khách hàng",
    color: "#0094e8",
    icon: <i className="fa-regular fa-user"></i>,
    quantity: 100,
  },
  {
    title: "Tài xế",
    color: "#00E878",
    icon: <i className="fa-solid fa-car"></i>,
    quantity: 100,
  },
  {
    title: "Tổng đài",
    color: "#E8A700",
    icon: <i className="fa-solid fa-headset"></i>,
    quantity: 100,
  },
];

const customizeOptions = [
  { icon: ic_unlock, title: "Mở khóa" },
  { icon: ic_lock, title: "Khóa" },
  { icon: ic_trash, title: "Xóa" },
];

const database = [
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
  {
    name: "Tran Bao Long",
    dob: "02/10/2002",
    phone: "012345678901",
    account: "Khach hang",
    status: "Binh thuong",
  },
];
function Accounts() {
  let pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return database.slice(firstPageIndex, lastPageIndex);
  }, [pageSize, currentPage]);

  const [checkedItems, setCheckedItems] = useState(false);

  const [createAccountForm, setCreateAccountForm] = useState(false);

  return (
    <>
      <h1>Tài khoản</h1>
      <div className={classes["filter-container"]}>
        {filters.map((item, index) => (
          <Filter key={index} title={item.title} icon={item.icon} color={item.color} quantity={item.quantity} />
        ))}
      </div>
      <div className={classes["createAccountBtn-container"]}>
        <div
          onClick={() => {
            setCreateAccountForm(true);
          }}
        >
          <CreateAccountBtn />
        </div>
      </div>
      <div className={classes["customize-container"]}>
        <div className={classes["customize-container-left"]}>
          <div className={classes["customize-container-left-filter"]}>
            <input type="text" name="filter" id="" placeholder="Tìm kiếm" />
          </div>
          <div className={classes["customize-container-left-select"]}>
            <input type="checkbox" onClick={(e) => console.log(e)} />
            <p>Chọn tất cả</p>
          </div>
        </div>
        <div className={classes["customize-container-right"]}>
          {customizeOptions.map((item, index) => (
            <CustomizeBtn key={index} iconBtn={item.icon} titleBtn={item.title} />
          ))}
        </div>
      </div>
      <div className={classes["table-container"]}>
        <div className={classes["table-container-title"]}>
          <div className={`${classes["table-container-checkbox"]}`}></div>
          <div className={`${classes["table-container-no"]} ${classes["title"]}`}>STT</div>
          <div className={`${classes["table-container-name"]} ${classes["title"]}`}>Họ và Tên</div>
          <div className={`${classes["table-container-dob"]} ${classes["title"]}`}>Ngày Sinh</div>
          <div className={`${classes["table-container-phone"]} ${classes["title"]}`}>Số Điện Thoại</div>
          <div className={`${classes["table-container-account"]} ${classes["title"]}`}>Loại Tài Khoản</div>
          <div className={`${classes["table-container-status"]} ${classes["title"]}`}>Trạng Thái</div>
          <div className={`${classes["table-container-tools"]}`}></div>
        </div>
        <div className={classes["table-container-content"]}>
          {currentTableData.map((item, index) => (
            <div
              // key={index}
              className={classes["table-container-content-item"]}
            >
              <div className={`${classes["table-container-checkbox"]} ${classes["item"]}`}>
                {/* <input type="checkbox" checked={checkedItems} /> */}
                <input type="checkbox" />
              </div>
              <div className={`${classes["table-container-no"]} ${classes["item"]}`}>
                {pageSize * (currentPage - 1) + index + 1}
              </div>
              <div className={`${classes["table-container-name"]} ${classes["item"]}`}>{item.name}</div>
              <div className={`${classes["table-container-dob"]} ${classes["item"]}`}>{item.dob}</div>
              <div className={`${classes["table-container-phone"]} ${classes["item"]}`}>{item.phone}</div>
              <div className={`${classes["table-container-account"]} ${classes["item"]}`}>{item.account}</div>
              <div className={`${classes["table-container-status"]} ${classes["item"]} ${classes["item-status"]}`}>
                {item.status}
              </div>
              <div className={`${classes["table-container-tools"]} ${classes["item"]}`}>
                <div className={classes["btn-customize"]}>
                  <img src={ic_edit} alt="none" />
                </div>
                <div className={classes["btn-customize"]}>
                  <img src={ic_view} alt="none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes["pagination-bar-container"]}>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={database.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <div
        className={`${classes["backdrop"]} ${
          createAccountForm ? classes["backdrop--enable"] : classes["backdrop--disable"]
        }`}
      >
        <CreateAccountForm setCreateAccountForm={setCreateAccountForm} />
      </div>
    </>
  );
}

export default Accounts;
