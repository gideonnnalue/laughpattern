import React from "react";

const ceo = () => {
  return (
    <div className="section-ceo">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 ceo-desc">
            <div className="container">
              <div className="row">
                <div className="col p-5">
                  <h3
                    className="heading heading-primary mt-5 text-white"
                    style={{
                      fontSize: "24px"
                    }}
                  >
                    Meet the CEO
                  </h3>
                  <p className="text-white mt-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi ducimus quaerat nulla nemo nisi, voluptatum libero
                    tenetur iste earum magnam incidunt laborum assumenda iusto,
                    sequi ipsam unde dignissimos exercitationem
                    harum!Repudiandae rerum cumque veniam alias? Excepturi iusto
                    voluptates temporibus aut ex! Error blanditiis consectetur <br /> <br /> 
                    ipsam cumque sapiente, accusamus sunt corporis nesciunt
                    magnam, rerum, tenetur dolorum adipisci alias voluptas totam
                    iusto.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ceo-image" />
        </div>
      </div>
    </div>
  );
};

export default ceo;
