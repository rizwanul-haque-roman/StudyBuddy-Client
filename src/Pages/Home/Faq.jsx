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
                      Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
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
