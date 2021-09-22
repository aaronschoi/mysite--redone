export default function SummaryElement({ cls, title, content  }) {
  return (
    <div className="development-summary">
      <div className="col-sm-1 col-md-1">
        <div className="development-img">
          <img
            className="img-responsive"
            src="./images/developerdesign.svg"
            alt={title}
          />
        </div>
      </div>

      <div className="col-sm-4 col-md-4">
        <div className="development-description">
          <h3>{title}</h3>
          <p>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
