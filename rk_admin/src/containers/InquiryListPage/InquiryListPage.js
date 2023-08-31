import React from "react";
import List from "../../components/Lists/List/List";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../utils/http-common";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const fetchBlog = async () => {
  const res = await apiClient.get("/inquiries");
  return res.data.data;
};
const InquiryListPage = () => {
  const { isLoading, isError, data, error } = useQuery(["inquiry"], fetchBlog);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div class="app-wrapper mt-5">
          <div class="app-content pt-3 p-md-3 p-lg-4">
            <div class="container-xl">
              <div class="row g-3 mb-4 align-items-center justify-content-between">
                <div class="col-auto">
                  <h1 class="app-page-title mb-0">Inquiries List</h1>
                </div>
                <div class="col-auto">
                  <div class="page-utilities">
                    <div class="row g-2 justify-content-start justify-content-md-end align-items-center">
                      <div class="col-auto">
                        <form class="table-search-form row gx-1 align-items-center">
                          <div class="col-auto">
                            <input
                              type="text"
                              id="search-orders"
                              name="searchorders"
                              class="form-control search-orders"
                              placeholder="Search"
                            />
                          </div>
                          <div class="col-auto">
                            <button type="submit" class="btn app-btn-secondary">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>

                      <div class="col-auto">
                        <select class="form-select w-auto">
                          <option selected value="option-1">
                            All
                          </option>
                          <option value="option-2">This week</option>
                          <option value="option-3">This month</option>
                          <option value="option-4">Last 3 months</option>
                        </select>
                      </div>
                      <div class="col-auto">
                        <a class="btn app-btn-secondary" href="#">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="bi bi-download me-1"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                            />
                          </svg>
                          Download CSV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-content" id="orders-table-tab-content">
                <div
                  class="tab-pane fade show active"
                  id="orders-all"
                  role="tabpanel"
                  aria-labelledby="orders-all-tab"
                >
                  <div class="app-card app-card-orders-table shadow-sm mb-5">
                    <div class="app-card-body">
                      <div class="table-responsive">
                        <table class="table app-table-hover mb-0 text-left">
                          <thead>
                            <tr>
                              <th className="cell">Name</th>
                              <th className="cell">Email</th>
                              <th className="cell">Budget</th>
                              <th className="cell">Project Details</th>
                              <th className="cell">Document</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data?.map((item) => {
                              return (
                                <tr>
                                  <td class="cell">{item.name}</td>
                                  <td class="cell">{item.email}</td>
                                  <td class="cell">{item.budget}</td>
                                  <td class="cell">{item.projectDetails}</td>
                                  <td class="cell">
                                    <a
                                      href={item.document}
                                      download={item.documentName}
                                    >
                                      {item.documentName}
                                    </a>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InquiryListPage;
