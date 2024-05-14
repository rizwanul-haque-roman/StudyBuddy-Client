import faq from "../../assets/FAQ.png";

const Faq = () => {
  return (
    <div className="container mx-auto my-24">
      <div>
        <div>
          <div className="hero justify-between">
            <div className="flex justify-between items-center">
              <img src={faq} className="w-2/5" />
              <div className="w-1/2">
                <h1 className="text-6xl font-bold leading-[80px]">
                  Frequently Asked Question
                </h1>
                <div className="join join-vertical w-full mt-12">
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                      What kind of web application is this?
                    </div>
                    <div className="collapse-content">
                      <p>
                        This is a web application for online group study with
                        friends(Every registered user is a friend of others in a
                        sense). Users can create assignments, complete them, and
                        grade their friends&apos; assignments. Thus everyone
                        helps everyone to improve.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      How to create an assignment?
                    </div>
                    <div className="collapse-content">
                      <p>
                        If you are not registered yet then go to the register
                        page and sign up. After registering successfully you
                        will be able to see a link in the Navigation bar called
                        Create Assignments. Go there and fill up the the form
                        and submit. You&apos;re done.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      How to submit assignments?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Go to the assignment page. Take any assignment you want.
                        Click on the view button. This will redirect you to the
                        assignments details page. See all the details of the
                        assignment and click on the take assignment button. This
                        will open a popup to submit your response. Submit a
                        public shareable document link after uploading your
                        assignment to your google drive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
