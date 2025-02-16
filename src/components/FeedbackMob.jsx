import abstract from "../assets/abstractMob.png";

export default function FeedbackMob() {
  return (
    <section className="px-[24px] py-[40px] font-rethinkSans">
        <img className="w-screen" src={abstract} alt="" />
        <div className="flex flex-col mt-[24px]">
              <div>
                <h1 className="text-[20px] font-[600]">
                  Customer feedback survey
                </h1>
                <p className="mt-[8px] leading-[18px] text-customText">
                  We’d love to hear your thoughts on our product! Please share
                  your feedback with us.
                </p>
              </div>
              <div className="flex flex-col mt-[24px]">
                <label className="font-[500]" htmlFor="name">
                  Enter Full Name
                </label>
                <input
                  className="focus:border-inputBorder focus:outline-none focus:border-[2px] pt-[10px] pb-[10px] pl-[16px] pr-[16px] border-[1px] border-customBorder rounded-[8px] mt-[4px]"
                  id="name"
                  placeholder="e.g Mark Zuckerberg"
                  type="text"
                />
              </div>
              <div className="flex flex-col mt-[16px]">
                <label className="font-[500]" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="focus:border-inputBorder focus:outline-none focus:border-[2px] pt-[10px] pb-[10px] pl-[16px] pr-[16px] border-[1px] border-customBorder rounded-[8px] mt-[4px]"
                  placeholder="e.g myemail@gmail.com"
                  id="email"
                  type="email"
                />
              </div>
              <div className="flex flex-col mt-[16px]">
                <label className="font-[500]" htmlFor="phone">
                  Phone number
                </label>
                <input
                  className="focus:border-inputBorder focus:outline-none focus:border-[2px] pt-[10px] pb-[10px] pl-[16px] pr-[16px] border-[1px] border-customBorder rounded-[8px] mt-[4px]"
                  placeholder="e.g 813 234 2453"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  id="phone"
                  type="tel"
                  required
                />
              </div>
              <div className="flex flex-col mt-[16px]">
                <label className="font-[500]" htmlFor="feedback">
                  Your feedback
                </label>
                <textarea
                  className="focus:border-inputBorder focus:outline-none focus:border-[2px] pt-[10px] pb-[10px] pl-[16px] pr-[16px] border-[1px] border-customBorder rounded-[8px] mt-[4px]"
                  placeholder="Write your message here"
                  rows={6}
                  name="feedback"
                  id="feedback"
                ></textarea>
              </div>
              <div className="mt-[6px]">
                <h1 className="text-customText">0/120 characters</h1>
              </div>
              <div className="mt-[16px]">
                <h1 className="font-[500]">
                  Rate us (Bad to good, left to right)
                </h1>
              </div>
              <div className="flex gap-[8px] mt-[6px]">
                <div className="p-[12px] bg-emojiBg rounded-[8px]">
                  <input
                    type="checkbox"
                    className="hidden peer"
                    name="feedback"
                    value="happy"
                  />
                  <span className="cursor-pointer text-4xl peer-checked:ring-2 peer-checked:ring-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_844_418)">
                        <path
                          d="M8.53867 15.666C12.7729 15.666 16.2053 12.2335 16.2053 7.99931C16.2053 3.76512 12.7729 0.332642 8.53867 0.332642C4.30449 0.332642 0.872009 3.76512 0.872009 7.99931C0.872009 12.2335 4.30449 15.666 8.53867 15.666Z"
                          fill="#FFCE52"
                        />
                        <path
                          d="M7.53398 11.9991L6.86731 11.9945C6.86731 10.9418 9.17231 10.6611 10.534 10.6611V11.3278C8.58098 11.3278 7.58298 11.8141 7.53398 11.9991Z"
                          fill="#273941"
                        />
                        <path
                          d="M13.5882 5.30889C13.5742 5.28423 13.5568 5.26156 13.5415 5.23756V5.66889C13.5415 5.84571 13.4713 6.01527 13.3462 6.1403C13.2212 6.26532 13.0516 6.33556 12.8748 6.33556C12.698 6.33556 12.5284 6.26532 12.4034 6.1403C12.2784 6.01527 12.2082 5.84571 12.2082 5.66889V5.00223H10.3882C10.0568 5.36714 9.87374 5.84267 9.87482 6.33556C9.87482 6.86599 10.0855 7.3747 10.4606 7.74977C10.8357 8.12485 11.3444 8.33556 11.8748 8.33556C12.4053 8.33556 12.914 8.12485 13.289 7.74977C13.6641 7.3747 13.8748 6.86599 13.8748 6.33556C13.8761 5.97341 13.7769 5.618 13.5882 5.30889Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M12.8763 6.33556C13.0531 6.33556 13.2226 6.26532 13.3477 6.1403C13.4727 6.01527 13.5429 5.84571 13.5429 5.66889V5.23756C13.4898 5.15406 13.4296 5.07532 13.3629 5.00223H12.2096V5.66889C12.2096 5.84571 12.2798 6.01527 12.4049 6.1403C12.5299 6.26532 12.6995 6.33556 12.8763 6.33556Z"
                          fill="#141E21"
                        />
                        <path
                          d="M6.92012 5.30889C6.90612 5.28423 6.88879 5.26156 6.87346 5.23756V5.66889C6.87346 5.84571 6.80322 6.01527 6.6782 6.1403C6.55317 6.26532 6.3836 6.33556 6.20679 6.33556C6.02998 6.33556 5.86041 6.26532 5.73539 6.1403C5.61036 6.01527 5.54012 5.84571 5.54012 5.66889V5.00223H3.72013C3.38879 5.36714 3.20571 5.84267 3.20679 6.33556C3.20679 6.86599 3.41751 7.3747 3.79258 7.74977C4.16765 8.12485 4.67636 8.33556 5.20679 8.33556C5.73722 8.33556 6.24593 8.12485 6.62101 7.74977C6.99608 7.3747 7.20679 6.86599 7.20679 6.33556C7.20807 5.97341 7.10884 5.618 6.92012 5.30889Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M6.20823 6.33556C6.38504 6.33556 6.55461 6.26532 6.67964 6.1403C6.80466 6.01527 6.8749 5.84571 6.8749 5.66889V5.23756C6.82182 5.15406 6.76159 5.07532 6.6949 5.00223H5.54156V5.66889C5.54156 5.84571 5.6118 6.01527 5.73683 6.1403C5.86185 6.26532 6.03142 6.33556 6.20823 6.33556Z"
                          fill="#141E21"
                        />
                        <path
                          d="M8.53034 1.3284C12.5803 1.3284 15.8637 4.16407 15.8637 7.66174H16.1887C16.0968 5.69242 15.2498 3.83419 13.8236 2.47304C12.3975 1.11189 10.5018 0.352432 8.53034 0.352432C6.55888 0.352432 4.6632 1.11189 3.23705 2.47304C1.81089 3.83419 0.963904 5.69242 0.872009 7.66174H1.19701C1.19701 4.16407 4.48034 1.3284 8.53034 1.3284Z"
                          fill="#FFE369"
                        />
                        <path
                          d="M15.872 7.67339C15.872 11.1711 12.5887 14.0067 8.53867 14.0067C4.48868 14.0067 1.20534 11.1711 1.20534 7.67339H0.880343C0.875676 7.78405 0.872009 7.89505 0.872009 8.00672C0.872009 10.04 1.67974 11.9901 3.11752 13.4279C4.5553 14.8656 6.50535 15.6734 8.53867 15.6734C10.572 15.6734 12.522 14.8656 13.9598 13.4279C15.3976 11.9901 16.2053 10.04 16.2053 8.00672C16.2053 7.89505 16.2017 7.78405 16.197 7.67339H15.872Z"
                          fill="#FFB32B"
                        />
                        <path
                          d="M12.9651 3.10293C13.0725 2.9955 13.0383 2.7873 12.8888 2.63792C12.7393 2.48853 12.5311 2.45452 12.4238 2.56195C12.3164 2.66938 12.3506 2.87757 12.5001 3.02696C12.6495 3.17635 12.8578 3.21036 12.9651 3.10293Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M10.7593 1.47623C10.8133 1.42216 10.7962 1.31744 10.7211 1.24233C10.6459 1.16723 10.5412 1.15018 10.4871 1.20426C10.4331 1.25833 10.4502 1.36305 10.5254 1.43816C10.6005 1.51326 10.7053 1.53031 10.7593 1.47623Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M12.2372 2.70787C12.4519 2.49301 12.3835 2.07652 12.0843 1.77761C11.7852 1.4787 11.3687 1.41057 11.154 1.62544C10.9393 1.8403 11.0077 2.25679 11.3068 2.5557C11.6059 2.85461 12.0225 2.92274 12.2372 2.70787Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M11.8735 8.33253C11.402 8.3321 10.9459 8.16513 10.5855 7.8611C10.2252 7.55707 9.98388 7.13552 9.90412 6.67086C9.85353 6.95855 9.86656 7.25383 9.9423 7.53594C10.0181 7.81805 10.1547 8.08015 10.3426 8.3038C10.5305 8.52745 10.7651 8.70723 11.0299 8.8305C11.2947 8.95377 11.5833 9.01753 11.8754 9.01731C12.1675 9.01709 12.456 8.95288 12.7207 8.82921C12.9853 8.70554 13.2196 8.5254 13.4072 8.30146C13.5947 8.07753 13.7309 7.81522 13.8063 7.533C13.8816 7.25077 13.8942 6.95547 13.8431 6.66786C13.764 7.13313 13.5229 7.55542 13.1624 7.86006C12.802 8.1647 12.3454 8.33205 11.8735 8.33253ZM5.20679 8.33253C4.73534 8.3321 4.2792 8.16513 3.91887 7.8611C3.55855 7.55707 3.31721 7.13552 3.23746 6.67086C3.18686 6.95855 3.19989 7.25383 3.27564 7.53594C3.35138 7.81805 3.48801 8.08015 3.6759 8.3038C3.8638 8.52745 4.0984 8.70723 4.36322 8.8305C4.62804 8.95377 4.91664 9.01753 5.20875 9.01731C5.50085 9.01709 5.78936 8.95288 6.05399 8.82921C6.31862 8.70554 6.55295 8.5254 6.7405 8.30146C6.92806 8.07753 7.06428 7.81522 7.1396 7.533C7.21491 7.25077 7.2275 6.95547 7.17646 6.66786C7.09733 7.13313 6.85622 7.55542 6.49576 7.86006C6.13531 8.1647 5.67874 8.33205 5.20679 8.33253ZM12.2068 4.9992H13.3601C13.4268 5.07229 13.487 5.15103 13.5401 5.23453C13.5555 5.25853 13.5735 5.2812 13.5868 5.30586C13.7489 5.5743 13.844 5.87788 13.8638 6.19086C13.8698 6.12786 13.8735 6.06386 13.8735 5.9992C13.8747 5.63704 13.7755 5.28163 13.5868 4.97253C13.5728 4.94786 13.5555 4.9252 13.5401 4.9012C13.487 4.81769 13.4268 4.73896 13.3601 4.66586H10.3868C10.0555 5.03078 9.87238 5.5063 9.87346 5.9992C9.87352 6.06979 9.87731 6.14033 9.88479 6.21053C9.90935 5.76138 10.0864 5.33405 10.3868 4.9992H12.2068ZM5.54013 4.9992H6.69346C6.76015 5.07229 6.82038 5.15103 6.87346 5.23453C6.88879 5.25853 6.90679 5.2812 6.92012 5.30586C7.08227 5.5743 7.17729 5.87788 7.19713 6.19086C7.20313 6.12786 7.20679 6.06386 7.20679 5.9992C7.20807 5.63704 7.10884 5.28163 6.92012 4.97253C6.90612 4.94786 6.88879 4.9252 6.87346 4.9012C6.82038 4.81769 6.76015 4.73896 6.69346 4.66586H3.72013C3.38879 5.03078 3.20571 5.5063 3.20679 5.9992C3.20686 6.06979 3.21064 6.14033 3.21813 6.21053C3.24268 5.76138 3.41977 5.33405 3.72013 4.9992H5.54013Z"
                          fill="#FBB40A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_844_418">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="p-[12px] bg-emojiBg rounded-[8px]">
                  <input
                    type="checkbox"
                    className="hidden peer"
                    name="feedback"
                    value="happy"
                  />
                  <span className="cursor-pointer text-4xl peer-checked:ring-2 peer-checked:ring-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_844_433)">
                        <path
                          d="M8.49357 15.666C12.7278 15.666 16.1602 12.2335 16.1602 7.99931C16.1602 3.76512 12.7278 0.332642 8.49357 0.332642C4.25939 0.332642 0.826904 3.76512 0.826904 7.99931C0.826904 12.2335 4.25939 15.666 8.49357 15.666Z"
                          fill="#FFCE52"
                        />
                        <path
                          d="M11.4827 7.33253C12.035 7.33253 12.4827 6.73558 12.4827 5.9992C12.4827 5.26282 12.035 4.66586 11.4827 4.66586C10.9304 4.66586 10.4827 5.26282 10.4827 5.9992C10.4827 6.73558 10.9304 7.33253 11.4827 7.33253Z"
                          fill="#273941"
                        />
                        <path
                          d="M5.50714 7.33253C6.05943 7.33253 6.50714 6.73558 6.50714 5.9992C6.50714 5.26282 6.05943 4.66586 5.50714 4.66586C4.95486 4.66586 4.50714 5.26282 4.50714 5.9992C4.50714 6.73558 4.95486 7.33253 5.50714 7.33253Z"
                          fill="#273941"
                        />
                        <path
                          d="M11.5055 7.00223C11.8737 7.00223 12.1721 6.55451 12.1721 6.00223C12.1721 5.44994 11.8737 5.00223 11.5055 5.00223C11.1373 5.00223 10.8388 5.44994 10.8388 6.00223C10.8388 6.55451 11.1373 7.00223 11.5055 7.00223Z"
                          fill="#141E21"
                        />
                        <path
                          d="M5.4904 7.00223C5.85859 7.00223 6.15706 6.55451 6.15706 6.00223C6.15706 5.44994 5.85859 5.00223 5.4904 5.00223C5.12221 5.00223 4.82373 5.44994 4.82373 6.00223C4.82373 6.55451 5.12221 7.00223 5.4904 7.00223Z"
                          fill="#141E21"
                        />
                        <path
                          d="M11.8251 6.00526C12.0092 6.00526 12.1584 5.85602 12.1584 5.67193C12.1584 5.48783 12.0092 5.33859 11.8251 5.33859C11.641 5.33859 11.4918 5.48783 11.4918 5.67193C11.4918 5.85602 11.641 6.00526 11.8251 6.00526Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M5.82979 6.00526C6.01389 6.00526 6.16313 5.85602 6.16313 5.67193C6.16313 5.48783 6.01389 5.33859 5.82979 5.33859C5.6457 5.33859 5.49646 5.48783 5.49646 5.67193C5.49646 5.85602 5.6457 6.00526 5.82979 6.00526Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M8.48524 1.3284C12.5352 1.3284 15.8186 4.16407 15.8186 7.66174H16.1436C16.0517 5.69242 15.2047 3.83419 13.7785 2.47304C12.3524 1.11189 10.4567 0.352432 8.48524 0.352432C6.51378 0.352432 4.61809 1.11189 3.19194 2.47304C1.76579 3.83419 0.918799 5.69242 0.826904 7.66174H1.1519C1.1519 4.16407 4.43524 1.3284 8.48524 1.3284Z"
                          fill="#FFE369"
                        />
                        <path
                          d="M15.8269 7.67339C15.8269 11.1711 12.5436 14.0067 8.49357 14.0067C4.44357 14.0067 1.16024 11.1711 1.16024 7.67339H0.835238C0.830571 7.78405 0.826904 7.89505 0.826904 8.00672C0.826904 10.04 1.63464 11.9901 3.07242 13.4279C4.5102 14.8656 6.46024 15.6734 8.49357 15.6734C10.5269 15.6734 12.4769 14.8656 13.9147 13.4279C15.3525 11.9901 16.1602 10.04 16.1602 8.00672C16.1602 7.89505 16.1566 7.78405 16.1519 7.67339H15.8269Z"
                          fill="#FFB32B"
                        />
                        <path
                          d="M11.1662 10.6611H5.83289V11.3278H11.1662V10.6611Z"
                          fill="#273941"
                        />
                        <path
                          d="M13.0981 3.27111C13.2055 3.16368 13.1713 2.95549 13.0218 2.8061C12.8723 2.65671 12.6641 2.6227 12.5568 2.73013C12.4494 2.83756 12.4836 3.04576 12.633 3.19514C12.7825 3.34453 12.9908 3.37854 13.0981 3.27111Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M10.8922 1.63453C10.9463 1.58045 10.9291 1.47573 10.854 1.40063C10.7788 1.32552 10.6741 1.30847 10.6201 1.36255C10.566 1.41663 10.5831 1.52135 10.6583 1.59645C10.7335 1.67156 10.8382 1.6886 10.8922 1.63453Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M12.3702 2.86617C12.5849 2.65131 12.5165 2.23481 12.2173 1.9359C11.9182 1.637 11.5017 1.56887 11.287 1.78373C11.0723 1.99859 11.1407 2.41509 11.4398 2.71399C11.7389 3.0129 12.1554 3.08103 12.3702 2.86617Z"
                          fill="#F6FAFD"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_844_433">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="p-[12px] bg-emojiBg rounded-[8px]">
                  <input
                    type="checkbox"
                    className="hidden peer"
                    name="feedback"
                    value="happy"
                  />
                  <span className="cursor-pointer text-4xl peer-checked:ring-2 peer-checked:ring-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_844_449)">
                        <path
                          d="M8.49796 15.666C12.7321 15.666 16.1646 12.2335 16.1646 7.99931C16.1646 3.76512 12.7321 0.332642 8.49796 0.332642C4.26378 0.332642 0.831299 3.76512 0.831299 7.99931C0.831299 12.2335 4.26378 15.666 8.49796 15.666Z"
                          fill="#FFCE52"
                        />
                        <path
                          d="M11.4871 7.33253C12.0393 7.33253 12.4871 6.73558 12.4871 5.9992C12.4871 5.26282 12.0393 4.66586 11.4871 4.66586C10.9348 4.66586 10.4871 5.26282 10.4871 5.9992C10.4871 6.73558 10.9348 7.33253 11.4871 7.33253Z"
                          fill="#273941"
                        />
                        <path
                          d="M5.51154 7.33253C6.06382 7.33253 6.51154 6.73558 6.51154 5.9992C6.51154 5.26282 6.06382 4.66586 5.51154 4.66586C4.95925 4.66586 4.51154 5.26282 4.51154 5.9992C4.51154 6.73558 4.95925 7.33253 5.51154 7.33253Z"
                          fill="#273941"
                        />
                        <path
                          d="M11.5099 7.00223C11.8781 7.00223 12.1765 6.55451 12.1765 6.00223C12.1765 5.44994 11.8781 5.00223 11.5099 5.00223C11.1417 5.00223 10.8432 5.44994 10.8432 6.00223C10.8432 6.55451 11.1417 7.00223 11.5099 7.00223Z"
                          fill="#141E21"
                        />
                        <path
                          d="M5.49479 7.00223C5.86298 7.00223 6.16146 6.55451 6.16146 6.00223C6.16146 5.44994 5.86298 5.00223 5.49479 5.00223C5.1266 5.00223 4.82812 5.44994 4.82812 6.00223C4.82812 6.55451 5.1266 7.00223 5.49479 7.00223Z"
                          fill="#141E21"
                        />
                        <path
                          d="M11.8295 6.00526C12.0136 6.00526 12.1628 5.85602 12.1628 5.67193C12.1628 5.48783 12.0136 5.33859 11.8295 5.33859C11.6454 5.33859 11.4962 5.48783 11.4962 5.67193C11.4962 5.85602 11.6454 6.00526 11.8295 6.00526Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M5.83419 6.00526C6.01828 6.00526 6.16752 5.85602 6.16752 5.67193C6.16752 5.48783 6.01828 5.33859 5.83419 5.33859C5.65009 5.33859 5.50085 5.48783 5.50085 5.67193C5.50085 5.85602 5.65009 6.00526 5.83419 6.00526Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M8.50547 12.996C5.93214 12.996 3.83881 11.052 3.83881 8.6627H4.50547C4.50547 10.6844 6.29981 12.3294 8.50547 12.3294C10.7111 12.3294 12.5055 10.6844 12.5055 8.6627H13.1721C13.1721 11.052 11.0788 12.996 8.50547 12.996Z"
                          fill="#273941"
                        />
                        <path
                          d="M8.48963 1.3284C12.5396 1.3284 15.823 4.16407 15.823 7.66174H16.148C16.0561 5.69242 15.2091 3.83419 13.7829 2.47304C12.3568 1.11189 10.4611 0.352432 8.48963 0.352432C6.51817 0.352432 4.62249 1.11189 3.19633 2.47304C1.77018 3.83419 0.923194 5.69242 0.831299 7.66174H1.1563C1.1563 4.16407 4.43963 1.3284 8.48963 1.3284Z"
                          fill="#FFE369"
                        />
                        <path
                          d="M15.8313 7.67339C15.8313 11.1711 12.548 14.0067 8.49796 14.0067C4.44797 14.0067 1.16463 11.1711 1.16463 7.67339H0.839632C0.834965 7.78405 0.831299 7.89505 0.831299 8.00672C0.831299 10.04 1.63903 11.9901 3.07681 13.4279C4.51459 14.8656 6.46464 15.6734 8.49796 15.6734C10.5313 15.6734 12.4813 14.8656 13.9191 13.4279C15.3569 11.9901 16.1646 10.04 16.1646 8.00672C16.1646 7.89505 16.161 7.78405 16.1563 7.67339H15.8313Z"
                          fill="#FFB32B"
                        />
                        <path
                          d="M13.1025 3.27111C13.2099 3.16368 13.1757 2.95549 13.0262 2.8061C12.8767 2.65671 12.6685 2.6227 12.5611 2.73013C12.4538 2.83756 12.4879 3.04576 12.6374 3.19514C12.7869 3.34453 12.9952 3.37854 13.1025 3.27111Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M10.8966 1.63453C10.9507 1.58045 10.9335 1.47573 10.8584 1.40063C10.7832 1.32552 10.6785 1.30847 10.6245 1.36255C10.5704 1.41663 10.5875 1.52135 10.6627 1.59645C10.7379 1.67156 10.8426 1.6886 10.8966 1.63453Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M12.3746 2.86617C12.5893 2.65131 12.5208 2.23481 12.2217 1.9359C11.9226 1.637 11.5061 1.56887 11.2914 1.78373C11.0766 1.99859 11.1451 2.41509 11.4442 2.71399C11.7433 3.0129 12.1598 3.08103 12.3746 2.86617Z"
                          fill="#F6FAFD"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_844_449">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div id="emoji4" className="p-[12px] bg-emojiBg rounded-[8px]">
                  <input
                    type="checkbox"
                    className="hidden peer"
                    name="feedback"
                    value="happy"
                  />
                  <span className="cursor-pointer text-4xl peer-checked:ring-2 peer-checked:ring-blue-500">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_844_465)">
                        <path
                          d="M8.50187 15.6699C12.7361 15.6699 16.1685 12.2374 16.1685 8.00324C16.1685 3.76906 12.7361 0.336578 8.50187 0.336578C4.26769 0.336578 0.835205 3.76906 0.835205 8.00324C0.835205 12.2374 4.26769 15.6699 8.50187 15.6699Z"
                          fill="#FFCE52"
                        />
                        <path
                          d="M2.83362 8.66664C2.83362 9.77331 5.36695 11 8.50029 11C11.6336 11 14.167 9.77331 14.167 8.66664C14.1607 9.35169 13.9873 10.0249 13.6621 10.6278C13.3368 11.2307 12.8694 11.7452 12.3003 12.1266C11.1887 12.9118 9.8612 13.3333 8.50029 13.3333C7.13937 13.3333 5.81187 12.9118 4.70029 12.1266C4.13122 11.7452 3.66378 11.2307 3.3385 10.6278C3.01322 10.0249 2.83992 9.35169 2.83362 8.66664Z"
                          fill="#AE2D4C"
                        />
                        <path
                          d="M14.167 8.66664C14.167 9.77331 11.6336 11 8.50029 11C5.36695 11 2.83362 9.77331 2.83362 8.66664C3.16695 8.99997 5.50029 9.33331 8.50029 9.33331C11.5003 9.33331 13.8336 8.99997 14.167 8.66664Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M11.5107 7.33645C12.063 7.33645 12.5107 6.7395 12.5107 6.00312C12.5107 5.26674 12.063 4.66978 11.5107 4.66978C10.9585 4.66978 10.5107 5.26674 10.5107 6.00312C10.5107 6.7395 10.9585 7.33645 11.5107 7.33645Z"
                          fill="#273941"
                        />
                        <path
                          d="M5.51544 7.33645C6.06773 7.33645 6.51544 6.7395 6.51544 6.00312C6.51544 5.26674 6.06773 4.66978 5.51544 4.66978C4.96316 4.66978 4.51544 5.26674 4.51544 6.00312C4.51544 6.7395 4.96316 7.33645 5.51544 7.33645Z"
                          fill="#273941"
                        />
                        <path
                          d="M11.5138 7.00616C11.882 7.00616 12.1804 6.55845 12.1804 6.00616C12.1804 5.45388 11.882 5.00616 11.5138 5.00616C11.1456 5.00616 10.8471 5.45388 10.8471 6.00616C10.8471 6.55845 11.1456 7.00616 11.5138 7.00616Z"
                          fill="#141E21"
                        />
                        <path
                          d="M5.4987 7.00616C5.86689 7.00616 6.16536 6.55845 6.16536 6.00616C6.16536 5.45388 5.86689 5.00616 5.4987 5.00616C5.13051 5.00616 4.83203 5.45388 4.83203 6.00616C4.83203 6.55845 5.13051 7.00616 5.4987 7.00616Z"
                          fill="#141E21"
                        />
                        <path
                          d="M11.8334 5.99929C12.0175 5.99929 12.1667 5.85005 12.1667 5.66596C12.1667 5.48186 12.0175 5.33263 11.8334 5.33263C11.6493 5.33263 11.5001 5.48186 11.5001 5.66596C11.5001 5.85005 11.6493 5.99929 11.8334 5.99929Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M5.83809 5.99929C6.02219 5.99929 6.17143 5.85005 6.17143 5.66596C6.17143 5.48186 6.02219 5.33263 5.83809 5.33263C5.654 5.33263 5.50476 5.48186 5.50476 5.66596C5.50476 5.85005 5.654 5.99929 5.83809 5.99929Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M8.50029 11.6666C11.1543 11.6666 13.3713 10.7863 13.9896 9.84464C14.1068 9.46293 14.1665 9.06592 14.167 8.66664C14.167 9.77331 11.6336 11 8.50029 11C5.36695 11 2.83362 9.77331 2.83362 8.66664C2.83404 9.06592 2.89381 9.46293 3.01095 9.84464C3.62928 10.7863 5.84629 11.6666 8.50029 11.6666Z"
                          fill="#8A293D"
                        />
                        <path
                          d="M13.6586 9.55164C13.8005 9.44782 13.919 9.31542 14.0065 9.16299C14.0941 9.01056 14.1487 8.84148 14.167 8.66664C13.8336 8.99997 11.5003 9.33331 8.50029 9.33331C5.50029 9.33331 3.16695 8.99997 2.83362 8.66664C2.85183 8.84148 2.90648 9.01056 2.99403 9.16299C3.08159 9.31542 3.2001 9.44782 3.34195 9.55164C4.24128 9.79797 6.16695 9.99997 8.50029 9.99997C10.8336 9.99997 12.7593 9.79797 13.6586 9.55164Z"
                          fill="#EDEDED"
                        />
                        <path
                          d="M8.51331 1.33232C12.5633 1.33232 15.8466 4.16799 15.8466 7.66566H16.1716C16.0798 5.69634 15.2328 3.83811 13.8066 2.47696C12.3805 1.11581 10.4848 0.356354 8.51331 0.356354C6.54186 0.356354 4.64617 1.11581 3.22002 2.47696C1.79387 3.83811 0.946875 5.69634 0.85498 7.66566H1.17998C1.17998 4.16799 4.46331 1.33232 8.51331 1.33232Z"
                          fill="#FFE369"
                        />
                        <path
                          d="M15.8352 7.66742C15.8352 11.1651 12.5519 14.0008 8.50187 14.0008C4.45187 14.0008 1.16854 11.1651 1.16854 7.66742H0.843538C0.838872 7.77809 0.835205 7.88909 0.835205 8.00075C0.835205 10.0341 1.64294 11.9841 3.08072 13.4219C4.5185 14.8597 6.46854 15.6674 8.50187 15.6674C10.5352 15.6674 12.4852 14.8597 13.923 13.4219C15.3608 11.9841 16.1685 10.0341 16.1685 8.00075C16.1685 7.88909 16.1649 7.77809 16.1602 7.66742H15.8352Z"
                          fill="#FFB32B"
                        />
                        <path
                          d="M13.1064 3.26516C13.2138 3.15773 13.1796 2.94954 13.0301 2.80015C12.8806 2.65076 12.6724 2.61675 12.5651 2.72418C12.4577 2.83161 12.4919 3.0398 12.6413 3.18919C12.7908 3.33858 12.9991 3.37259 13.1064 3.26516Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M10.9005 1.62856C10.9546 1.57449 10.9375 1.46976 10.8623 1.39466C10.7871 1.31955 10.6824 1.30251 10.6284 1.35658C10.5743 1.41066 10.5914 1.51538 10.6666 1.59049C10.7418 1.66559 10.8465 1.68264 10.9005 1.62856Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M12.3784 2.87011C12.5931 2.65524 12.5247 2.23875 12.2256 1.93984C11.9265 1.64093 11.5099 1.5728 11.2952 1.78767C11.0805 2.00253 11.1489 2.41902 11.448 2.71793C11.7471 3.01684 12.1637 3.08497 12.3784 2.87011Z"
                          fill="#F6FAFD"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_844_465">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div id="emoji5"  className="p-[12px] bg-emojiBg rounded-[8px] ">
                  <input
                    type="checkbox"
                    className="hidden peer"
                    name="feedback"
                    value="happy"
                  />
                  <span className="cursor-pointer text-4xl peer-checked:ring-2 peer-checked:ring-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_844_483)">
                        <path
                          d="M8.50834 15.666C12.7425 15.666 16.175 12.2335 16.175 7.99931C16.175 3.76512 12.7425 0.332642 8.50834 0.332642C4.27416 0.332642 0.841675 3.76512 0.841675 7.99931C0.841675 12.2335 4.27416 15.666 8.50834 15.666Z"
                          fill="#FFCE52"
                        />
                        <path
                          d="M8.50001 1.3284C12.55 1.3284 15.8333 4.16407 15.8333 7.66174H16.1583C16.0664 5.69242 15.2195 3.83419 13.7933 2.47304C12.3672 1.11189 10.4715 0.352432 8.50001 0.352432C6.52855 0.352432 4.63286 1.11189 3.20671 2.47304C1.78056 3.83419 0.93357 5.69242 0.841675 7.66174H1.16667C1.16667 4.16407 4.45001 1.3284 8.50001 1.3284Z"
                          fill="#FFE369"
                        />
                        <path
                          d="M15.8417 7.67339C15.8417 11.1711 12.5583 14.0067 8.50834 14.0067C4.45834 14.0067 1.17501 11.1711 1.17501 7.67339H0.850008C0.845341 7.78405 0.841675 7.89505 0.841675 8.00672C0.841675 10.04 1.64941 11.9901 3.08719 13.4279C4.52497 14.8656 6.47501 15.6734 8.50834 15.6734C10.5417 15.6734 12.4917 14.8656 13.9295 13.4279C15.3673 11.9901 16.175 10.04 16.175 8.00672C16.175 7.89505 16.1713 7.78405 16.1667 7.67339H15.8417Z"
                          fill="#FFB32B"
                        />
                        <path
                          d="M12.9348 2.76657C13.0421 2.65913 13.008 2.45094 12.8585 2.30155C12.709 2.15216 12.5008 2.11815 12.3934 2.22558C12.2861 2.33301 12.3202 2.54121 12.4697 2.6906C12.6192 2.83999 12.8274 2.874 12.9348 2.76657Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M10.729 1.47623C10.783 1.42216 10.7659 1.31744 10.6907 1.24233C10.6156 1.16723 10.5108 1.15018 10.4568 1.20426C10.4028 1.25833 10.4199 1.36305 10.495 1.43816C10.5702 1.51326 10.6749 1.53031 10.729 1.47623Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M12.2068 2.37151C12.4215 2.15665 12.3531 1.74015 12.054 1.44125C11.7549 1.14234 11.3383 1.07421 11.1236 1.28907C10.9089 1.50393 10.9773 1.92043 11.2765 2.21933C11.5756 2.51824 11.9921 2.58637 12.2068 2.37151Z"
                          fill="#F6FAFD"
                        />
                        <path
                          d="M12.4974 7.99312C13.602 7.99312 14.4974 7.09769 14.4974 5.99312C14.4974 4.88855 13.602 3.99312 12.4974 3.99312C11.3929 3.99312 10.4974 4.88855 10.4974 5.99312C10.4974 7.09769 11.3929 7.99312 12.4974 7.99312Z"
                          fill="url(#paint0_radial_844_483)"
                        />
                        <path
                          d="M4.50372 7.99312C5.60829 7.99312 6.50372 7.09769 6.50372 5.99312C6.50372 4.88855 5.60829 3.99312 4.50372 3.99312C3.39915 3.99312 2.50372 4.88855 2.50372 5.99312C2.50372 7.09769 3.39915 7.99312 4.50372 7.99312Z"
                          fill="url(#paint1_radial_844_483)"
                        />
                        <path
                          d="M8.51585 9.3341C7.04552 9.3341 5.84918 8.28743 5.84918 7.00077H6.51585C6.51585 7.91977 7.41285 8.66743 8.51585 8.66743C9.61885 8.66743 10.5158 7.91977 10.5158 7.00077H11.1825C11.1825 8.28743 9.98618 9.3341 8.51585 9.3341ZM13.1825 4.3341H12.5158C12.5158 4.06888 12.4105 3.81453 12.223 3.62699C12.0354 3.43946 11.7811 3.3341 11.5158 3.3341C11.2506 3.3341 10.9963 3.43946 10.8087 3.62699C10.6212 3.81453 10.5158 4.06888 10.5158 4.3341H9.84918C9.84918 3.89207 10.0248 3.46815 10.3373 3.15559C10.6499 2.84303 11.0738 2.66743 11.5158 2.66743C11.9579 2.66743 12.3818 2.84303 12.6944 3.15559C13.0069 3.46815 13.1825 3.89207 13.1825 4.3341ZM7.18252 4.3341H6.51585C6.51585 4.06888 6.41049 3.81453 6.22296 3.62699C6.03542 3.43946 5.78107 3.3341 5.51585 3.3341C5.25063 3.3341 4.99628 3.43946 4.80874 3.62699C4.62121 3.81453 4.51585 4.06888 4.51585 4.3341H3.84918C3.84918 3.89207 4.02478 3.46815 4.33734 3.15559C4.6499 2.84303 5.07382 2.66743 5.51585 2.66743C5.95788 2.66743 6.3818 2.84303 6.69436 3.15559C7.00692 3.46815 7.18252 3.89207 7.18252 4.3341Z"
                          fill="#273941"
                        />
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_844_483"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12.4974 5.99312) scale(2)"
                        >
                          <stop stopColor="#FF568D" />
                          <stop offset="0.454" stopColor="#FF9678" />
                          <stop offset="0.817" stopColor="#FFC26A" />
                          <stop offset="1" stopColor="#FFD364" />
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_844_483"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(4.50372 0.159785) scale(0.166667)"
                        >
                          <stop stopColor="#FF568D" />
                          <stop offset="0.454" stopColor="#FF9678" />
                          <stop offset="0.817" stopColor="#FFC26A" />
                          <stop offset="1" stopColor="#FFD364" />
                        </radialGradient>
                        <clipPath id="clip0_844_483">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="bg-buttonBg flex justify-center py-[12px] mt-[24px] rounded-[8px] cursor-pointer">
                <button className="text-[15px] text-white font-[700]">Submit Feedback</button>
              </div>
            </div> {/*ends here*/}
    </section>
  )
}
