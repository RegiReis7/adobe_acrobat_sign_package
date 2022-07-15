import AcrobatSign from "./libs";

const token =
  "3AAABLblqZhDsaXQRsxlUuk6tM3aqj6XYGbi8uGRYJUXruPeg0uPUzrtLuQbWB8lfQRkp-NPQ7LCCFN7dGB8WLgivQLQqE3VS";

const apiUser = "reginaldo.reis+demo2@vilt-group.com";

const Adobe_Sign = new AcrobatSign(token, apiUser);

Adobe_Sign.widgets.get
  .widgetMembers("CBJCHBCAABAAnqRCTIiQccSzatgD6KbFwbxwmK_bQDKQ")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    throw new Error(error);
  });
