import React from "react";

const EmployeeForm = () => {
    return(
        <div class="container bg-light">
      <div class="row py-5 justify-content-center">
        <div
          class="registrationform col-lg-5"
          style={{position: "relative", paddingRight: "100px", paddingBottom: "50px"}}
        >
          <h3>Employee Form</h3>
          <form action="#" method="post">
            <div class="mt-3 mb-3">
              <label for="Firstname" class="form-label">Firstname</label>
              <input type="name" class="form-control" id="Firstname" required />
            </div>
            <div class="mt-3 mb-3">
              <label for="Lastname" class="form-label">Lastname</label>
              <input type="name" class="form-control" id="Lastname" required />
            </div>
            <label for="gender" class="form-label">Gender</label>
            <div class="row g-3 align-items-center mb-3">
              <div class="form-check col-lg-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div class="form-check col-lg-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Female
                </label>
              </div>
              <div class="form-check col-lg-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  Other
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label for="Phone" class="form-label">Phone Number</label>
              <input
                type="number"
                class="form-control"
                id="Phone"
                aria-describedby="phonelHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email Address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputCountry" class="form-label"
                >Country</label
              >
              <select name="country" id="country" class="form-control" required>
                <option value="">Select country</option>
                <option value="nepal">Nepal</option>
                <option value="usa">Chaina</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputDesignation" class="form-label"
                >Designation</label
              >
              <select
                name="Designation"
                id="Designation"
                class="form-control"
                required
              >
                <option value="">Select designation</option>
                <option value="qa">QA</option>
                <option value="ba">Developer</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="cexampleInputStartDate" class="form-label"
                >Start-Date</label
              >
              <input
                type="date"
                class="form-control"
                id="cexampleInputStartDate"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
    );
}

export default  EmployeeForm;