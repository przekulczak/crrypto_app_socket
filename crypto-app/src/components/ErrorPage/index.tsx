import "./ErrorPage.css";

export const ErrorPage = () => (
  <>
    <div className="error-page-wrapper">
      <div className="error-page-inner-wrapper">
        <p>An error occured.</p>
        <button
          className="error-page-button"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    </div>
  </>
);
