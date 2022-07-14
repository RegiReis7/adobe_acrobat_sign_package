import { AcrobatSign } from "./libs/acrobatSign";

const Adobe_Sign = new AcrobatSign(
  "3AAABLblqZhDsaXQRsxlUuk6tM3aqj6XYGbi8uGRYJUXruPeg0uPUzrtLuQbWB8lfQRkp-NPQ7LCCFN7dGB8WLgivQLQqE3VS",
  "reginaldo.reis+demo2@vilt-group.com"
);

Adobe_Sign.agreements.get.agreementFormData("CBJCHBCAABAAYB0lkHp3bH0emH21KusKd2iDRKLg_JnG")
  .then(async (result) => {
    console.log(result)
  })
  .catch((error) => console.error(error));
