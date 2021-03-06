import React from "react";
import PropTypes from "prop-types";

class DesignForm extends React.Component {
  render() {
    const { changeColor, palette } = this.props;
    return (
      <div
        id="design-container"
        className="design__container--palette collapsible__container"
      >
        <div>
          <h3 className="design__title--colors">colores</h3>
        </div>
        <div>
          {" "}
          <a href="true" className="design__palette-colors">
            <label
              className="design__palette palette1"
              htmlFor="settings__palette1"
            >
              <input
                className="desidn__radio"
                value="1"
                type="radio"
                id="settings__palette1"
                name="color"
                onChange={changeColor}
                checked={palette === 1 ? true : false}
              />
              <ul className="design__list">
                <li
                  className="list__color"
                  style={{ backgroundColor: "#114e4e" }}
                />
                <li
                  className="list__color"
                  style={{ backgroundColor: "#438792" }}
                />
                <li
                  className="list__color"
                  style={{ backgroundColor: "#a2deaf" }}
                />
              </ul>
            </label>
          </a>
          <a href="true" className="design__palette-colors">
            <label
              className="design__palette palette2"
              htmlFor="settings__palette2"
            >
              <input
                className="desidn__radio"
                type="radio"
                id="settings__palette2"
                value="2"
                name="color"
                onChange={changeColor}
                checked={palette === 2 ? true : false}
              />
              <ul className="design__list">
                <li
                  className="list__color"
                  style={{ backgroundColor: "#420101" }}
                />
                <li
                  className="list__color"
                  style={{ backgroundColor: "#bd1010" }}
                />
                <li
                  className="list__color"
                  style={{ backgroundColor: "#e95626" }}
                />
              </ul>
            </label>
          </a>
          <a href="true" className="design__palette-colors">
            <label
              className="design__palette palette3"
              htmlFor="settings__palette3"
            >
              <input
                className="desidn__radio"
                value="3"
                type="radio"
                id="settings__palette3"
                name="color"
                onChange={changeColor}
                checked={palette === 3 ? true : false}
              />
              <ul className="design__list">
                <li
                  className="list__color"
                  style={{ backgroundColor: "#3e5b65" }}
                />
                <li
                  className="list__color"
                  style={{ backgroundColor: "#dfe5eb" }}
                />
                <li
                  className="list__color"
                  style={{ backgroundColor: "#a0c0cf" }}
                />
              </ul>
            </label>
          </a>
        </div>
      </div>
    );
  }
}

DesignForm.propTypes = {
  changeColor: PropTypes.func,
  palette: PropTypes.number
}

export default DesignForm;
