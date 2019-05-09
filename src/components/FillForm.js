import React from 'react';

class FillForm extends React.Component {
    render() {
        return (
            <div id="fill-container" className="fill__form collapsible__container">
                <fieldset className="fill__fieldset">
                    <label for="fullName">Nombre completo</label>
                    <input className="input-name" placeholder="Ej: Sally Jill"
                        id="fullName" type="text" name="name" required />
                    <label for="jobTitle">Puesto</label>
                    <input className="input-job" placeholder="Ej: Front-end unicorn"
                        id="jobTitle" type="text" name="job" required />
                </fieldset>
                <fieldset className="fill__fieldset select-image">
                    <label for="selectImage">Imagen de perfil</label>
                    <div className="fill__select-image--container">
                        <button className="fill__select--button js__profile-trigger" type="button">Añadir imagen</button>
                        <input id="selectImage" type="file" accept=".png, .jpg, .jpeg"
                            name="selectImage" className="js__profile-upload-btn" />
                        <div className="preview__image js__profile-preview"></div>
                    </div>
                </fieldset>
                <fieldset className="fill__fieldset">
                    <label for="email">Email</label>
                    <input placeholder="Ej: sally-hill@gmail.com" id="email"
                        type="email" name="email" />
                    <label for="phone">Teléfono</label>
                    <input placeholder="Ej: 555-55-55-55" id="phone" type="tel"
                        name="phone" />
                    <label for="linkedin">Linkedin</label>
                    <input placeholder="Ej: sally.hill" id="linkedin" type="text"
                        name="linkedin" />
                    <label for="github">Github</label>
                    <input placeholder="Ej: sally-hill" id="github" type="text"
                        name="github" />
                </fieldset>
            </div>
        )
    }
}

export default FillForm;