import "./square-shape.css";

const SquareShape = () => {
  return (
    <div className="square-shape">
      <div className="square-shape-child" />
      <div className="rectangle-frame">
        <h2 className="overview">Overview</h2>
      </div>
      <div className="rectangle-frame1">
        <h2 className="profile">Profile</h2>
      </div>
      <div className="rectangle-frame2">
        <h2 className="appointments">Appointments</h2>
      </div>
      <div className="rectangle-frame3">
        <h2 className="history">History</h2>
      </div>
      <div className="rectangle-frame4">
        <div className="videos-parent">
          <h3 className="videos">Videos</h3>
          <h3 className="videos-library">Videos Library</h3>
        </div>
      </div>
      <div className="rectangle-frame5">
        <h2 className="messages">Messages</h2>
      </div>
      <div className="rectangle-frame6">
        <h2 className="support">Support</h2>
      </div>
      <div className="rectangle-frame7">
        <div className="faqs-parent">
          <h3 className="faqs">FAQ’s</h3>
          <h3 className="procedure-information">Procedure Information</h3>
        </div>
      </div>
      <div className="rectangle-frame8">
        <h2 className="aftercare">Aftercare</h2>
      </div>
      <div className="rectangle-frame9">
        <h3 className="quizzes">Quizzes</h3>
        <h3 className="health-skin">{`Health & Skin Assesment`}</h3>
      </div>
      <div className="text">
        <div className="line">
          <h2 className="finances">Finances</h2>
        </div>
        <button className="frame-button">
          <div className="frame-child14" />
          <div className="virtual-consultation">Virtual Consultation</div>
        </button>
      </div>
    </div>
  );
};

export default SquareShape;
