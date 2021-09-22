export default function BannerButtons() {
  return (
    <div className="row text-center">
      <div className="banner-buttons">
        <div className="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
          <a className="btn btn-default btn-border" href="#about">
            Info
          </a>
        </div>

        <div className="col-sm-1 col-md-1">
          <a className="btn btn-default btn-border" href="#projects">
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
