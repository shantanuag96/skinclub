import { useState } from "react";
import DateGroup from "../components/date-group";
import SquareShape from "../components/square-shape";
import "./invoice-list.css";

const InvoiceList = () => {
  const [searchByPatientValue, setSearchByPatientValue] = useState("");
  const [loremIpsumDolorValue, setLoremIpsumDolorValue] = useState("");
  return (
    <div className="invoicelist">
      <DateGroup />
      <main className="vector">
        <SquareShape />
        <section className="frame-date">
          <div className="line-separator">
            <div className="patient-info">
              <h1 className="invoice">Invoice</h1>
              <h1 className="invoice-list">Invoice list</h1>
            </div>
            <div className="total-status">
              <div className="frame-view">
                <img className="vector-graphic-icon" loading="lazy" alt="" />
                <div className="subtotal-tax-discount">
                  <div className="subtotal-tax-discount-child" />
                  <div className="rate-qty-amount">
                    <div className="frame-invoice-summary">
                      <div className="frame-dr-patient">
                        <div className="frame-dr-patient-child" />
                        <input
                          className="search-by-patient"
                          placeholder="Search by patient name"
                          type="text"
                          value={searchByPatientValue}
                          onChange={(event) =>
                            setSearchByPatientValue(event.target.value)
                          }
                        />
                        <div className="frame-item-display">
                          <img
                            className="summary-notes-terms"
                            alt=""
                            src="/vector-1.svg"
                          />
                          <img
                            className="frame-item-display-child"
                            alt=""
                            src="/line-19.svg"
                          />
                        </div>
                      </div>
                      <div className="frame-preview-invoice">
                        <div className="frame-preview-invoice-child" />
                        <div className="line-item">
                          <div className="select-date">Select Date:</div>
                        </div>
                        <div className="rectangle-logo-logotype">
                          <img
                            className="rectangle-logo-logotype-child"
                            loading="lazy"
                            alt=""
                            src="/line-18.svg"
                          />
                          <div className="aug">20 Aug</div>
                        </div>
                        <img
                          className="time-stamp-group"
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                    </div>
                    <div className="image" />
                  </div>
                  <div className="line-container">
                    <div className="john-doe-frame">
                      <div className="john-doe-frame-child" />
                      <div className="patient-time-frame">
                        <div className="patient-time-frame-child" />
                        <div className="patient">Patient</div>
                        <div className="time">Time</div>
                        <div className="patient-frame">
                          <div className="date">Date</div>
                        </div>
                        <div className="patient-frame1">
                          <div className="date">Total</div>
                        </div>
                        <div className="status">Status</div>
                      </div>
                      <div className="complete-group">
                        <div className="date-section">
                          <div className="john-doe">John Doe</div>
                        </div>
                        <div className="total-container">09:00 - 10:30</div>
                        <div className="notes-terms-label">
                          <div className="select-date">22/08/2023</div>
                        </div>
                        <div className="header-group">
                          <div className="div">$180</div>
                        </div>
                        <div className="rectangle-parent">
                          <div className="frame-child" />
                          <div className="in-progress">In Progress</div>
                        </div>
                      </div>
                      <div className="view-more-frame" />
                      <div className="complete-group2">
                        <div className="s-u-m-m-e-r-y-label-parent">
                          <div className="date-section">
                            <div className="john-doe">John Doe</div>
                          </div>
                          <div className="total-container">09:00 - 10:30</div>
                          <div className="notes-terms-label">
                            <div className="select-date">22/08/2023</div>
                          </div>
                          <div className="header-group">
                            <div className="div">$180</div>
                          </div>
                          <div className="rectangle-group">
                            <div className="frame-item" />
                            <div className="complete">Complete</div>
                          </div>
                        </div>
                      </div>
                      <div className="view-more-frame" />
                      <div className="complete-group4">
                        <div className="s-u-m-m-e-r-y-label-parent">
                          <div className="date-section">
                            <div className="john-doe">John Doe</div>
                          </div>
                          <div className="total-container">09:00 - 10:30</div>
                          <div className="notes-terms-label">
                            <div className="select-date">22/08/2023</div>
                          </div>
                          <div className="header-group">
                            <div className="div">$180</div>
                          </div>
                          <div className="rectangle-container">
                            <div className="frame-inner" />
                            <div className="canceled">Canceled</div>
                          </div>
                        </div>
                      </div>
                      <div className="view-more-frame" />
                      <div className="complete-group2">
                        <div className="s-u-m-m-e-r-y-label-parent">
                          <div className="date-section">
                            <div className="john-doe">John Doe</div>
                          </div>
                          <div className="total-container">09:00 - 10:30</div>
                          <div className="notes-terms-label">
                            <div className="select-date">22/08/2023</div>
                          </div>
                          <div className="header-group">
                            <div className="div">$180</div>
                          </div>
                          <div className="rectangle-group">
                            <div className="frame-item" />
                            <div className="complete">Complete</div>
                          </div>
                        </div>
                      </div>
                      <div className="view-more-frame" />
                      <div className="complete-group2">
                        <div className="s-u-m-m-e-r-y-label-parent">
                          <div className="date-section">
                            <div className="john-doe">John Doe</div>
                          </div>
                          <div className="total-container">09:00 - 10:30</div>
                          <div className="notes-terms-label">
                            <div className="select-date">22/08/2023</div>
                          </div>
                          <div className="header-group">
                            <div className="div">$180</div>
                          </div>
                          <div className="rectangle-group">
                            <div className="frame-item" />
                            <div className="complete">Complete</div>
                          </div>
                        </div>
                      </div>
                      <div className="rectangle-parent2">
                        <div className="frame-child2" />
                        <div className="line-div" />
                        <div className="preview-invoice-frame-wrapper">
                          <div className="s-u-m-m-e-r-y-label-parent">
                            <div className="john-doe-frame1">
                              <div className="john-doe5">John Doe</div>
                            </div>
                            <div className="vector-frame">09:00 - 10:30</div>
                            <div className="notes-terms-label">
                              <div className="div10">22/08/2023</div>
                            </div>
                            <div className="header-group">
                              <div className="div11">$180</div>
                            </div>
                            <div className="rectangle-parent3">
                              <div className="frame-item" />
                              <div className="complete">Complete</div>
                            </div>
                          </div>
                        </div>
                        <div className="view-more-frame" />
                      </div>
                      <div className="complete-group2">
                        <div className="s-u-m-m-e-r-y-label-parent">
                          <div className="date-section">
                            <div className="john-doe">John Doe</div>
                          </div>
                          <div className="total-container">09:00 - 10:30</div>
                          <div className="notes-terms-label">
                            <div className="select-date">22/08/2023</div>
                          </div>
                          <div className="header-group">
                            <div className="div">$180</div>
                          </div>
                          <div className="rectangle-group">
                            <div className="frame-item" />
                            <div className="complete">Complete</div>
                          </div>
                        </div>
                      </div>
                      <div className="view-more-frame" />
                      <div className="complete-group2">
                        <div className="s-u-m-m-e-r-y-label-parent">
                          <div className="date-section">
                            <div className="john-doe">John Doe</div>
                          </div>
                          <div className="total-container">09:00 - 10:30</div>
                          <div className="notes-terms-label">
                            <div className="select-date">22/08/2023</div>
                          </div>
                          <div className="header-group">
                            <div className="div">$180</div>
                          </div>
                          <div className="rectangle-group">
                            <div className="frame-item" />
                            <div className="complete">Complete</div>
                          </div>
                        </div>
                      </div>
                      <div className="view-more-frame" />
                      <div className="complete-group2">
                        <div className="s-u-m-m-e-r-y-label-parent">
                          <div className="date-section">
                            <div className="john-doe">John Doe</div>
                          </div>
                          <div className="total-container">09:00 - 10:30</div>
                          <div className="notes-terms-label">
                            <div className="select-date">22/08/2023</div>
                          </div>
                          <div className="header-group">
                            <div className="div">$180</div>
                          </div>
                          <div className="rectangle-group">
                            <div className="frame-item" />
                            <div className="complete">Complete</div>
                          </div>
                        </div>
                      </div>
                      <div className="view-more-frame" />
                      <div className="complete-group2">
                        <div className="s-u-m-m-e-r-y-label-parent">
                          <div className="date-section">
                            <div className="john-doe">John Doe</div>
                          </div>
                          <div className="total-container">09:00 - 10:30</div>
                          <div className="notes-terms-label">
                            <div className="select-date">22/08/2023</div>
                          </div>
                          <div className="header-group">
                            <div className="div">$180</div>
                          </div>
                          <div className="rectangle-group">
                            <div className="frame-item" />
                            <div className="complete">Complete</div>
                          </div>
                        </div>
                      </div>
                      <div className="view-more-frame-parent">
                        <div className="view-more-frame" />
                        <div className="s-u-m-m-e-r-y">
                          <h3 className="view-more">View more</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rectangle-parent8">
                <div className="frame-child9" />
                <div className="frame-child10" />
                <div className="skin-club-logo-logotype-white">
                  <div className="preview-invoice-text">
                    <h3 className="preview-invoice">Preview Invoice</h3>
                    <div className="tax-summary">
                      <div className="tax-summary-child" />
                      <img className="vector-icon" alt="" src="/vector-3.svg" />
                    </div>
                  </div>
                  <div className="summary-frame">
                    <div className="summary-frame-child" />
                    <div className="s-u-m-m-e-r-y1">
                      <div className="summery">SUMMERY</div>
                      <img className="john-doe-frame4" loading="lazy" alt="" />
                    </div>
                    <div className="dr-vihang-jane-doe">
                      <div className="dr-vihang-parent">
                        <div className="dr-vihang">Dr. Vihang</div>
                        <div className="jane-doe">Jane Doe</div>
                      </div>
                    </div>
                    <img
                      className="skinclublogo-logotype-white-2-icon"
                      loading="lazy"
                      alt=""
                      src="/skinclublogo-logotype-white-2@2x.png"
                    />
                    <div className="rectangle-parent9">
                      <div className="frame-child11" />
                      <div className="rectangle-parent10">
                        <div className="frame-child12" />
                        <div className="discounted-total">
                          <div className="item">item</div>
                        </div>
                        <div className="rate">Rate</div>
                        <div className="qty">Qty</div>
                        <div className="amount">Amount</div>
                      </div>
                      <div className="serum-frame-set">
                        <div className="vitamin-a-night-serum-parent">
                          <div className="vitamin-a-night">
                            Vitamin A Night Serum
                          </div>
                          <div className="parent">
                            <div className="div24">$90</div>
                            <div className="div25">2</div>
                          </div>
                          <div className="item-frame">$180</div>
                        </div>
                      </div>
                      <div className="serum-frame-set">
                        <div className="vitamin-a-night-serum-parent">
                          <div className="vitamin-a-night">
                            Vitamin A Night Serum
                          </div>
                          <div className="parent">
                            <div className="div24">$90</div>
                            <div className="div25">2</div>
                          </div>
                          <div className="item-frame">$180</div>
                        </div>
                      </div>
                      <div className="serum-frame-set">
                        <div className="vitamin-a-night-serum-parent">
                          <div className="vitamin-a-night">
                            Vitamin A Night Serum
                          </div>
                          <div className="parent">
                            <div className="div24">$90</div>
                            <div className="div25">2</div>
                          </div>
                          <div className="item-frame">$180</div>
                        </div>
                      </div>
                    </div>
                    <div className="parent-frame">
                      <div className="line-separator1">
                        <div className="subtotal-tax-discounts">
                          <div className="subtotal-parent">
                            <div className="subtotal">Subtotal</div>
                            <div className="tax-5">tax 5%</div>
                            <div className="discount-10">Discount 10%</div>
                          </div>
                          <div className="subtotal-parent">
                            <div className="div32">$540.00</div>
                            <div className="div33">$00.00</div>
                            <div className="div34">$00.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="image" />
                      <div className="total-frame">
                        <div className="subtotal-tax-discounts">
                          <div className="total1">total</div>
                          <div className="total-frame1">$540.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="parent-group">
                      <div className="parent-group-child" />
                      <div className="notes-terms">
                        <div className="subheader-text">
                          <div className="notesterms">Notes/Terms</div>
                        </div>
                        <input
                          className="lorem-ipsum-dolor"
                          placeholder="Lorem ipsum dolor sit amet. Sit eaque assumenda qui."
                          type="text"
                          value={loremIpsumDolorValue}
                          onChange={(event) =>
                            setLoremIpsumDolorValue(event.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="group-button">
                  <div className="frame-child13" />
                  <div className="create-new-invoice">Create New Invoice</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InvoiceList;
