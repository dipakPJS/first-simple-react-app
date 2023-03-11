function Button({ title, bgColor, btnText }) {
  return (
    <>
      <div className="welcome">
        <div className="inner-section">
          <div className="world">
            <h1> {title} </h1>
            <p>
              MY name is Deepak Pokharel I am from Nepal. I love to code a lot.
            </p>
            <a
              href="https://www.google.com/"
              className="button"
              target="_blank"
              style={{ backgroundColor: bgColor }}
            >
              {btnText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
