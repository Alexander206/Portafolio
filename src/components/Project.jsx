import React from "react";

const Project = ({ img, title, category, date, text, author, location, link }) => {
    return (
        <a className="projects_link" href={link} target="_blank">
            <figure className="projects_img">
                <img src={img} alt="image project" />
            </figure>
            <article className="projects_data">
                <span className="projects_category"> {category} </span>
                <h3 className="projects_title"> {title} </h3>
                <span className="projects_date"> {date} </span>

                <p className="projects_text">{text}</p>

                <span className="projects_author">
                    {author}
                    <br />
                    {location}
                </span>
            </article>
        </a>
    );
};

export default Project;
