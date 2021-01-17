import React from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <Row>
        <Col className="col-md-3 sm=12 md=6 lg=4 ex=3">
          <Card>
            <Link>
              <img
                className="card-img-top"
                src="/images/drives_and_storage/samsung_fit_plus_sub_3-1_flash_drive.jpg"
                alt="drives-and-storage"
              />
            </Link>
            <div className="card-body">
              <Link className="category_links">
                <h5 className="card-title card-title col d-flex justify-content-center">
                  Battery Grips
                </h5>
              </Link>
            </div>
          </Card>
        </Col>
        <Col className="col-md-3 sm=12 md=6 lg=4 ex=3">
          <Card>
            <Link>
              <img
                className="card-img-top"
                src="/images/drives_and_storage/samsung_fit_plus_sub_3-1_flash_drive.jpg"
                alt="drives-and-storage"
              />
            </Link>
            <div className="card-body">
              <Link className="category_links">
                <h5 className="card-title card-title col d-flex justify-content-center">
                  Drives/Storage
                </h5>
              </Link>
            </div>
          </Card>
        </Col>
        <Col className="col-md-3 sm=12 md=6 lg=4 ex=3">
          <Card>
            <Link>
              <img
                className="card-img-top"
                src="/images/drives_and_storage/samsung_fit_plus_sub_3-1_flash_drive.jpg"
                alt="drives-and-storage"
              />
            </Link>
            <div className="card-body">
              <Link className="category_links">
                <h5 className="card-title card-title col d-flex justify-content-center">
                  Flashes
                </h5>
              </Link>
            </div>
          </Card>
        </Col>
        <Col className="col-md-3 sm=12 md=6 lg=4 ex=3">
          <Card>
            <Link>
              <img
                className="card-img-top"
                src="/images/drives_and_storage/samsung_fit_plus_sub_3-1_flash_drive.jpg"
                alt="drives-and-storage"
              />
            </Link>
            <div className="card-body">
              <Link className="category_links">
                <h5 className="card-title card-title col d-flex justify-content-center">
                  Flash Triggers
                </h5>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-3 sm=12 md=6 lg=4 ex=3">
          <Card>
            <Link>
              <img
                className="card-img-top"
                src="/images/drives_and_storage/samsung_fit_plus_sub_3-1_flash_drive.jpg"
                alt="drives-and-storage"
              />
            </Link>
            <div className="card-body">
              <Link className="category_links">
                <h5 className="card-title card-title col d-flex justify-content-center">
                  Lenses
                </h5>
              </Link>
            </div>
          </Card>
        </Col>
        <Col className="col-md-3 sm=12 md=6 lg=4 ex=3">
          <Card>
            <Link>
              <img
                className="card-img-top"
                src="/images/drives_and_storage/samsung_fit_plus_sub_3-1_flash_drive.jpg"
                alt="drives-and-storage"
              />
            </Link>
            <div className="card-body">
              <Link className="category_links">
                <h5 className="card-title card-title col d-flex justify-content-center">
                  Light Modifiers
                </h5>
              </Link>
            </div>
          </Card>
        </Col>
        <Col className="col-md-3 sm=12 md=6 lg=4 ex=3">
          <Card>
            <Link>
              <img
                className="card-img-top"
                src="/images/drives_and_storage/samsung_fit_plus_sub_3-1_flash_drive.jpg"
                alt="drives-and-storage"
              />
            </Link>
            <div className="card-body">
              <Link className="category_links">
                <h5 className="card-title card-title col d-flex justify-content-center">
                  Studio Lights
                </h5>
              </Link>
            </div>
          </Card>
        </Col>
        <Col className="col-md-3 sm=12 md=6 lg=4 ex=3">
          <Card>
            <Link>
              <img
                className="card-img-top"
                src="/images/drives_and_storage/samsung_fit_plus_sub_3-1_flash_drive.jpg"
                alt="drives-and-storage"
              />
            </Link>
            <div className="card-body">
              <Link className="category_links">
                <h5 className="card-title col d-flex justify-content-center">
                  Teleconverters
                </h5>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Categories;
