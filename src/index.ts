import { APIConfig } from "./API/config";

const Adobe_Sign = new APIConfig('3AAABLblqZhDsaXQRsxlUuk6tM3aqj6XYGbi8uGRYJUXruPeg0uPUzrtLuQbWB8lfQRkp-NPQ7LCCFN7dGB8WLgivQLQqE3VS', 'reginaldo.reis+demo2@vilt-group.com')

Adobe_Sign.getAPIUrl().then((result) => {
    console.log(result)
}).catch((e) => console.error(e))
