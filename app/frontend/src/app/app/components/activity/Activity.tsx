import DashHead from "src/app/app/components/DashHead";


const Activity = () => {
  return (
    <div className="flex flex-col items-stretch ml-[250px] w-full max-md:w-full max-md:ml-0">
      <div className="justify-center items-center bg-gray-950 flex grow flex-col w-full mx-auto pt-10 pb-24 px-16 max-md:max-w-full max-md:pb-24 max-md:px-5">
        <DashHead />
        {/* can be in layout since static */}
        <div className="justify-between items-center self-center flex w-full flex-col mt-14 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
          <div className="text-violet-700 text-xl self-center whitespace-nowrap">Activity</div>
          <div className="items-end self-stretch flex grow flex-col mt-10 max-md:max-w-full max-md:mt-10">
            <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94314a0c-ea85-42fa-98e8-b4a804eb5e71?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
              />
              <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                You just sent 5 ETH to 0x94ce…3d17
              </div>
              <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
                09/11/23 8:05am
              </div>
            </div>
            <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/49bcb9f4-d84c-4d78-948d-10361ce43257?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                className="aspect-square object-contain object-center w-5 rotate-90 overflow-hidden self-stretch max-w-full"
              />
              <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                You just received 3.5 ETH from 0x94ce…3d17
              </div>
              <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
                09/11/23 8:05am
              </div>
            </div>
            <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1a27cf-66e6-4aa9-a9f6-e76d334f5123?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
              />
              <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                You just sent 5 ETH to 0x94ce…3d17
              </div>
              <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
                09/11/23 8:05am
              </div>
            </div>
            <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
              />
              <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                You are about to spend 0.5 ETH on a transaction
              </div>
              <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
                09/11/23 8:05am
              </div>
            </div>
            <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fe7f61-7710-47f4-bd1d-4efe70301412?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                className="aspect-square object-contain object-center w-5 rotate-90 overflow-hidden self-stretch max-w-full"
              />
              <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                You just received 3.5 ETH from 0x94ce…3d17
              </div>
              <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
                09/11/23 8:05am
              </div>
            </div>
            <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
              />
              <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                You are about to spend 0.5 ETH on a transaction
              </div>
              <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
                09/11/23 8:05am
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
