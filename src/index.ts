import { AcrobatSign } from "./libs/acrobatSign";

async function main() {
  try {
    const Adobe_Sign = new AcrobatSign(
      "3AAABLblqZhDsaXQRsxlUuk6tM3aqj6XYGbi8uGRYJUXruPeg0uPUzrtLuQbWB8lfQRkp-NPQ7LCCFN7dGB8WLgivQLQqE3VS",
      "reginaldo.reis+demo2@vilt-group.com"
    );

    console.log((await Adobe_Sign.agreements.getMethods.getAgreementById("CBJCHBCAABAAU94zE3iigR0TeK5qII8-mLctOn9T65lL")).createdDate)

    console.log((await Adobe_Sign.agreements.getMethods.getAgreementDocumentUrl("CBJCHBCAABAAU94zE3iigR0TeK5qII8-mLctOn9T65lL")).url)

    console.log((await Adobe_Sign.agreements.getMethods.getAgreementEvents("CBJCHBCAABAAU94zE3iigR0TeK5qII8-mLctOn9T65lL")).events.map((e) => e.description))
    
  } catch (error) {
    throw new Error(error);
  }
}

main()
