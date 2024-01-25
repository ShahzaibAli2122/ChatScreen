import { FunctionComponent } from "react";

const Chat: FunctionComponent = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[1005px] overflow-hidden text-left text-sm text-neutral-shades-04-75 font-base-1-semibold">
      <div className="absolute top-[0px] left-[250px] w-[1189px] h-[84.12px] text-[13px] font-open-sans">
        <div className="absolute top-[84.12px] left-[0px] bg-whitesmoke-200 w-[1.72px] h-[1189px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute w-[calc(100%_-_2.03px)] top-[0px] right-[2.03px] left-[0px] bg-neutral-00 shadow-[0.8583984375px_0px_0px_#f4f4f4_inset] h-[82.41px] flex flex-row items-center justify-between py-[20.6015625px] px-[34.3359375px] box-border">
          <div className="rounded-[10.3px] bg-neutral-02 w-[309.02px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[6.8671875px] box-border">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[10.3px]">
                <img
                  className="relative w-[20.6px] h-[20.6px] overflow-hidden shrink-0"
                  alt=""
                  src="/ui-iconsearchlight.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[1.72px]">
                  <div className="relative rounded-[1.72px] bg-neutral-shades-04-75 w-[1.72px] h-[17.17px]" />
                  <div className="relative">{`Search ... `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <img
              className="relative w-[41.2px] h-[41.2px]"
              alt=""
              src="/message.svg"
            />
            <img
              className="relative w-[41.2px] h-[41.2px]"
              alt=""
              src="/notification.svg"
            />
            <img
              className="relative rounded-[1000px] w-[41px] h-[41px] object-cover"
              alt=""
              src="/rectangle-25@2x.png"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute h-[0.3%] w-[1.07%] top-[62.48%] right-[-1.1%] bottom-[37.22%] left-[100.02%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <h1>hello</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illum ipsam, explicabo voluptate quibusdam esse eius, qui cumque doloremque eligendi suscipit impedit labore tempore unde fuga provident culpa totam nam.</p>
      <div className="absolute top-[959px] left-[calc(50%_-_136px)] w-[273px] flex flex-row items-center justify-end text-darkslategray font-open-sans">
        <div className="relative leading-[33px] inline-block w-[274px] h-[17px] shrink-0">
          © 2023 MyCentrality. All Rights Reserved.
        </div>
      </div>
      <div className="absolute top-[98px] left-[261px] bg-neutral-00 w-[386px] h-[840px] overflow-hidden flex flex-col items-center justify-start py-[22px] px-0 box-border gap-[10px] text-base text-new font-subheading-3-medium">
        <div className="flex flex-row items-start justify-start gap-[5px]">
          <div className="rounded-8xs bg-new w-[122px] h-[38px] flex flex-row items-center justify-center text-neutral-00">
            <div className="relative font-medium inline-block w-[55px] h-6 shrink-0">
              Parent
            </div>
          </div>
          <div className="rounded-8xs bg-new-1 w-[122px] h-[38px] flex flex-row items-center justify-center">
            <div className="h-[19px] flex flex-row items-center justify-center">
              <div className="relative font-medium inline-block w-14 h-6 shrink-0">
                Admin
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, voluptates quasi nulla illo doloribus sunt dolor! Dolorem doloribus nobis deserunt nemo pariatur totam quibusdam libero molestiae iure, ea soluta sapiente!
              </div>
            </div>
          </div>
          <div className="rounded-8xs bg-new-1 w-[122px] h-[38px] flex flex-row items-center justify-center">
            <div className="h-[19px] flex flex-row items-center justify-center">
              <div className="relative font-medium inline-block w-16 h-6 shrink-0">
                Student
              </div>
              <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste unde assumenda molestias culpa quas sint voluptas aut voluptates eveniet adipisci natus nobis qui, quaerat earum iusto? Modi sunt iure praesentium!</h1>
            </div>
          </div>
        </div>
        <div className="w-[385px] flex flex-col items-center justify-start gap-[15px] text-xl text-black-90">
          <div className="flex flex-row items-center justify-center gap-[196px]">
            <div className="relative font-medium">Recent Chats</div>
            <div className="relative font-medium text-black-20 text-right">
              34
            </div>
          </div>
          <div className="rounded-lg bg-neutral-00 box-border w-[363px] h-[45px] flex flex-col items-start justify-start py-2 px-4 text-base text-black-2 font-base-1-semibold border-[1px] border-solid border-black-1">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-5 h-5"
                alt=""
                src="/iconlylightsearch.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-between">
                <div className="self-stretch relative">Search</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[386px] flex flex-col items-start justify-start py-0 pr-0 pl-1.5 box-border text-xs text-black-60 font-base-1-semibold">
          <div className="box-border w-[365px] flex flex-col items-center justify-center py-3 px-6 border-b-[1px] border-solid border-stroke">
            <div className="w-[363px] flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative w-[51px] h-12"
                alt=""
                src="/group-12.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative text-base font-medium">
                    Kunle Adekunle
                  </div>
                  <div className="flex flex-row items-start justify-start opacity-[0] text-black-20">
                    <div className="relative">12 Sept 2022</div>
                  </div>
                  <div className="flex flex-row items-center justify-start text-right text-neutral-00">
                    <div className="rounded-lg bg-new flex flex-row items-start justify-start py-0.5 px-[7px]">
                      <div className="relative">New</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between text-sm text-black-30">
                  <div className="relative">
                    Hi, i want make enquiries about yo...
                  </div>
                  <div className="flex flex-row items-start justify-start text-right text-xs">
                    <div className="relative">12:55 am</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border w-[363px] flex flex-col items-center justify-center py-3 px-6 border-b-[1px] border-solid border-stroke">
            <div className="w-[363px] flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative w-[51px] h-12"
                alt=""
                src="/group-10.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative text-base font-medium">Jane Doe</div>
                  <div className="flex flex-row items-start justify-start opacity-[0] text-black-20">
                    <div className="relative">12 Sept 2022</div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px] text-right text-black-100">
                    <div className="rounded-lg bg-new flex flex-row items-start justify-start py-0.5 px-[7px] opacity-[0]">
                      <div className="relative">New</div>
                    </div>
                    <div className="relative rounded-481xl bg-new w-6 h-6 overflow-hidden shrink-0 text-center text-sm text-neutral-00">
                      <div className="absolute top-[16.67%] left-[33.33%]">
                        2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between text-sm text-black-30">
                  <div className="relative">
                    Hi, i want make enquiries about yo...
                  </div>
                  <div className="flex flex-row items-start justify-start text-right text-xs">
                    <div className="relative">12:55 am</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border w-[363px] flex flex-col items-center justify-center py-3 px-6 border-b-[1px] border-solid border-stroke">
            <div className="w-[363px] flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative w-[51px] h-12"
                alt=""
                src="/group-12.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative text-base font-medium">
                    Janet Adebayo
                  </div>
                  <div className="flex flex-row items-start justify-start opacity-[0] text-black-20">
                    <div className="relative">12 Sept 2022</div>
                  </div>
                  <div className="flex flex-row items-center justify-start opacity-[0] text-right text-black-100">
                    <div className="rounded-lg bg-secondary-20 flex flex-row items-start justify-start py-0.5 px-[7px]">
                      <div className="relative">New</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between text-sm text-black-30">
                  <div className="relative">
                    Hi, i want make enquiries about yo...
                  </div>
                  <div className="flex flex-row items-start justify-start text-right text-xs">
                    <div className="relative">12:55 am</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border w-[363px] flex flex-col items-center justify-center py-3 px-6 border-b-[1px] border-solid border-stroke">
            <div className="w-[363px] flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative w-[51px] h-12"
                alt=""
                src="/group-12.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative text-base font-medium">
                    Kunle Adekunle
                  </div>
                  <div className="flex flex-row items-start justify-start opacity-[0] text-black-20">
                    <div className="relative">12 Sept 2022</div>
                  </div>
                  <div className="flex flex-row items-center justify-start opacity-[0] text-right text-black-100">
                    <div className="rounded-lg bg-secondary-20 flex flex-row items-start justify-start py-0.5 px-[7px]">
                      <div className="relative">New</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between text-sm text-black-30">
                  <div className="relative">
                    Hi, i want make enquiries about yo...
                  </div>
                  <div className="flex flex-row items-start justify-start text-right text-xs">
                    <div className="relative">12:55 am</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border w-[363px] flex flex-col items-center justify-center py-3 px-6 border-b-[1px] border-solid border-stroke">
            <div className="w-[363px] flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative w-[51px] h-12"
                alt=""
                src="/group-10.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative text-base font-medium">Jane Doe</div>
                  <div className="flex flex-row items-start justify-start opacity-[0] text-black-20">
                    <div className="relative">12 Sept 2022</div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px] opacity-[0] text-right text-black-100">
                    <div className="rounded-lg bg-secondary-20 flex flex-row items-start justify-start py-0.5 px-[7px]">
                      <s
                <div className="self-stretch flex flex-row items-end justify-between text-sm text-black-30">
                  <div className="relative">
                    Hi, i want make enquiries about yo...
                  </div>
                  <div className="flex flex-row items-start justify-start text-right text-xs">
                    <div className="relative">12:55 am</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border w-[363px] flex flex-col items-center justify-center py-3 px-6 border-b-[1px] border-solid border-stroke">
            <div className="w-[363px] flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative w-[51px] h-12"
                alt=""
                src="/group-12.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative text-base font-medium">
                    Janet Adebayo
                  </div>
                  <div className="flex flex-row items-start justify-start opacity-[0] text-black-20">
                    <div className="relative">12 Sept 2022</div>
                  </div>
                  <div className="flex flex-row items-center justify-start opacity-[0] text-right text-black-100">
                    <div className="rounded-lg bg-secondary-20 flex flex-row items-start justify-start py-0.5 px-[7px]">
                      <div className="relative">New</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between text-sm text-black-30">
                  <div className="relative">
                    Hi, i want make enquiries about yo...
                  </div>
                  <div className="flex flex-row items-start justify-start text-right text-xs">
                    <div className="relative">12:55 am</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border w-[363px] flex flex-col items-center justify-center py-3 px-6 border-b-[1px] border-solid border-stroke">
            <div className="w-[363px] flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative w-[51px] h-12"
                alt=""
                src="/group-12.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative text-base font-medium">
                    Kunle Adekunle
                  </div>
                  <div className="flex flex-row items-start justify-start opacity-[0] text-black-20">
                    <div className="relative">12 Sept 2022</div>
                  </div>
                  <div className="flex flex-row items-center justify-start opacity-[0] text-right text-black-100">
                    <div className="rounded-lg bg-secondary-20 flex flex-row items-start justify-start py-0.5 px-[7px]">
                      <div className="relative">New</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between text-sm text-black-30">
                  <div className="relative">
                    Hi, i want make enquiries about yo...
                  </div>
                  <div className="flex flex-row items-start justify-start text-right text-xs">
                    <div className="relative">12:55 am</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border w-[363px] flex flex-col items-center justify-center py-3 px-6 border-b-[1px] border-solid border-stroke">
            <div className="w-[363px] flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative w-[51px] h-12"
                alt=""
                src="/group-12.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative text-base font-medium">
                    Kunle Adekunle
                  </div>
                  <div className="flex flex-row items-start justify-start opacity-[0] text-black-20">
                    <div className="relative">12 Sept 2022</div>
                  </div>
                  <div className="flex flex-row items-center justify-start opacity-[0] text-right text-black-100">
                    <div className="rounded-lg bg-secondary-20 flex flex-row items-start justify-start py-0.5 px-[7px]">
                      <div className="relative">New</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between text-sm text-black-30">
                  <div className="relative">
                    Hi, i want make enquiries about yo...
                  </div>
                  <div className="flex flex-row items-start justify-start text-right text-xs">
                    <div className="relative">12:55 am</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-3 px-6 border-b-[1px] border-solid border-stroke">
            <div className="w-[363px] flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative w-[51px] h-12"
                alt=""
                src="/group-12.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative text-base font-medium">
                    Kunle Adekunle
                  </div>
                  <div className="flex flex-row items-start justify-start opacity-[0] text-black-20">
                    <div className="relative">12 Sept 2022</div>
                  </div>
                  <div className="flex flex-row items-center justify-start opacity-[0] text-right text-black-100">
                    <div className="rounded-lg bg-secondary-20 flex flex-row items-start justify-start py-0.5 px-[7px]">
                      <div className="relative">New</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between text-sm text-black-30">
                  <div className="relative">Macbook Pro</div>
                  <div className="flex flex-row items-start justify-start text-right text-xs">
                    <div className="relative">12:55 am</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[98px] left-[647px] w-[758px] h-[845px] text-3xs text-neutral-00 font-small">
        <div className="absolute top-[0px] left-[0px] w-[758px] h-[845px]">
          <div className="absolute top-[0px] left-[0px] bg-deepskyblue w-[758px] h-[845px]" />
          <div className="absolute top-[18px] left-[662px] w-5 h-5 overflow-hidden" />
        </div>
        <div className="absolute top-[30px] left-[29.77px] w-[712.23px] h-[690px]">
          <div className="absolute top-[560px] left-[0px] w-[379px] h-[130px]">
            <div className="absolute top-[0px] left-[0px] w-[379px] h-[130px]">
              <img
                className="absolute top-[90px] left-[0px] w-[39.69px] h-10"
                alt=""
                src="/group-608.svg"
              />
              <div className="absolute top-[0px] left-[19.84px] w-[359.16px] h-20">
                <div className="absolute top-[0px] left-[9.92px] rounded-t-8xs rounded-br-8xs rounded-bl-none bg-new w-[349.24px] h-20" />
                <div className="absolute top-[60px] left-[283.75px] inline-block w-[45.64px] opacity-[0.5]">
                  09:04 PM
                </div>
                <div className="absolute top-[25px] left-[39.69px] text-[12.64px] inline-block w-[286.73px] opacity-[0.8]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
                <img
                  className="absolute top-[70px] left-[0px] w-[9.92px] h-2.5"
                  alt=""
                  src="/rectangle-168.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[152px] left-[0px] w-[712.23px] h-[330px] text-[12.64px]">
            <div className="absolute top-[0px] left-[0px] w-[712.23px] h-[330px]">
              <img
                className="absolute top-[129px] left-[0px] w-[39.69px] h-10"
                alt=""
                src="/group-608.svg"
              />
              <div className="absolute top-[0px] left-[19.84px] w-[692.39px] h-[330px]">
                <div className="absolute top-[53px] left-[9.92px] w-[349.24px] h-[65px]">
                  <div className="absolute top-[0px] left-[0px] rounded-t-8xs rounded-br-8xs rounded-bl-none bg-new w-[349.24px] h-[65px]" />
                  <div className="absolute top-[12px] left-[15.87px] inline-block w-[289.71px] h-[26px] opacity-[0.8]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
                  <div className="absolute top-[45px] left-[276.47px] text-3xs inline-block w-[52px] opacity-[0.5]">
                    09:02 PM
                  </div>
                </div>
                <div className="absolute top-[0px] left-[10.39px] w-[190.49px] h-[34px]">
                  <div className="absolute top-[0px] left-[0px] rounded-t-8xs rounded-br-8xs rounded-bl-none bg-new w-[190.49px] h-[34px]" />
                  <div className="absolute top-[9px] left-[14.47px] inline-block w-[166px] opacity-[0.8]">{`Lorem Ipsum is simply `}</div>
                </div>
                <div className="absolute top-[226px] left-[502.39px] w-[190px] h-[104px] text-new">
                  <div className="absolute top-[0px] left-[190px] rounded-t-8xs rounded-br-8xs rounded-bl-none bg-neutral-00 w-[190px] h-11 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[60px] left-[190px] rounded-t-8xs rounded-br-8xs rounded-bl-none bg-neutral-00 w-[190px] h-11 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[14px] left-[12px] inline-block w-[166px] opacity-[0.8]">{`Lorem Ipsum is simply `}</div>
                  <div className="absolute top-[74px] left-[12px] inline-block w-[166px] opacity-[0.8]">{`Lorem Ipsum is simply `}</div>
                  <div className="absolute top-[28px] left-[145px] text-[9.64px] text-gray1 inline-block w-10 opacity-[0.8]">
                    12:02 PM
                  </div>
                  <div className="absolute top-[88px] left-[145px] text-[9.64px] text-gray1 inline-block w-10 opacity-[0.8]">
                    12:02 PM
                  </div>
                </div>
                <img
                  className="absolute top-[108px] left-[0px] w-[9.92px] h-2.5"
                  alt=""
                  src="/rectangle-168.svg"
                />
              </div>
              <img
                className="absolute h-[0.33%] w-[1.67%] top-[20.86%] right-[43.4%] bottom-[78.81%] left-[54.93%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.2]"
                alt=""
                src="/more@2x.png"
              />
              <img
                className="absolute h-[0.33%] w-[1.67%] top-[75.19%] right-[27.67%] bottom-[24.48%] left-[70.66%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.2]"
                alt=""
                src="/more@2x.png"
              />
              <img
                className="absolute h-[0.33%] w-[1.67%] top-[92.33%] right-[27.67%] bottom-[7.34%] left-[70.66%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.2]"
                alt=""
                src="/more@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[264.23px] h-[39px] text-base text-black1">
            <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-badge w-[35.72px] h-9 opacity-[0.2]" />
            <img
              className="absolute top-[1px] left-[0px] rounded-[50%] w-[35.72px] h-9 object-cover"
              alt=""
              src="/ellipse-93@2x.png"
            />
            <div className="absolute top-[29px] left-[24.8px] rounded-[50%] bg-success-500 box-border w-[7.94px] h-2 border-[1px] border-solid border-neutral-00" />
            <div className="absolute top-[0px] left-[45.23px] font-medium inline-block w-[219px]">
              Jane Doe
            </div>
            <div className="absolute top-[23px] left-[45.64px] text-[12.64px] inline-block w-[37.7px] opacity-[0.4]">
              Online
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[855px] left-[682px] w-[721px] h-[60px] text-[12.64px] text-light-version-text font-small">
        <div className="absolute top-[0px] left-[0px] w-[721px] h-[60px]">
          <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-neutral-00 w-[721px] h-[60px]" />
        </div>
        <img
          className="absolute h-[22%] w-[1.93%] top-[46.54%] right-[7.37%] bottom-[31.46%] left-[90.71%] max-w-full overflow-hidden max-h-full opacity-[0.5]"
          alt=""
          src="/smile.svg"
        />
        <img
          className="absolute h-[35.9%] w-[3.05%] top-[39.45%] right-[2.69%] bottom-[24.65%] left-[94.26%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/send-icon.svg"
        />
        <div className="absolute top-[22px] left-[70.23px] w-[125px] h-4">
          <div className="absolute top-[0px] left-[0px] inline-block w-[125px] opacity-[0.5]">
            Type a message...
          </div>
        </div>
        <img
          className="absolute top-[20px] left-[60.52px] w-0 h-5"
          alt=""
          src="/line.svg"
        />
        <img
          className="absolute h-[25.96%] w-[2.14%] top-[43.12%] right-[93.68%] bottom-[30.92%] left-[4.18%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/add-image.svg"
        />
      </div>
      <div className="absolute top-[116px] left-[1309px] flex flex-row items-start justify-start gap-[18px]">
        <img className="relative w-5 h-[15px]" alt="" src="/vector.svg" />
        <img className="relative w-[15px] h-[15px]" alt="" src="/vector.svg" />
        <img className="relative w-0.5 h-4" alt="" src="/group.svg" />
      </div>
      <div className="absolute top-[100px] left-[1159px] rounded-xl w-[218px] h-12" />
      <div className="absolute top-[0px] left-[0px] bg-neutral-00 w-[250px] h-[947px] overflow-hidden text-greyscale-500">
        <div className="absolute top-[32px] left-[64px] w-[139.78px] h-[29px] hidden text-4xl-2 text-greyscale-900">
          <img
            className="relative w-[27.84px] h-[27.84px]"
            alt=""
            src="/exclude.svg"
          />
          <b className="absolute top-[0%] left-[26.56%] tracking-[-0.29px] leading-[125%]">
            Hiphonic
          </b>
        </div>
        <div className="absolute top-[87.5px] left-[-0.5px] box-border w-[251px] h-px border-t-[1px] border-solid border-greyscale-100" />
        <div className="absolute top-[764px] left-[8px] rounded-xl w-[218px] h-12 hidden flex-row items-center justify-start py-0 px-4 box-border gap-[16px]">
          <img
            className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
            alt=""
            src="/settings.svg"
          />
          <div className="relative tracking-[0.2px] leading-[160%] font-medium">
            Settings
          </div>
        </div>
        <div className="absolute top-[820px] left-[8px] rounded-xl w-[218px] h-12 hidden flex-row items-center justify-start py-0 px-4 box-border gap-[16px]">
          <img
            className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
            alt=""
            src="/logout.svg"
          />
          <div className="relative tracking-[0.2px] leading-[160%] font-medium">
            Log Out
          </div>
        </div>
        <img
          className="absolute top-[35px] left-[24px] w-6 h-6 overflow-hidden hidden"
          alt=""
          src="/menu2.svg"
        />
        <div className="absolute top-[128px] left-[0px] flex flex-col items-start justify-start gap-[8px] text-base">
          <div className="w-[250px] flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[20px]">
            <div className="relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-neutral-00 w-1 h-8" />
            <div className="relative w-[202px] h-12">
              <div className="absolute top-[12px] left-[0px] flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/layoutgrid.svg"
                />
                <div className="relative tracking-[0.2px] leading-[150%] font-medium">
                  Home
                </div>
              </div>
            </div>
          </div>
          <div className="bg-new w-[250px] flex flex-row items-center justify-start py-0 px-6 box-border gap-[20px] text-neutral-00">
            <div className="relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-greyscale-900 w-1 h-8 hidden" />
            <div className="w-[202px] h-12 flex flex-row items-center justify-start gap-[80px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/briefcase.svg"
                />
                <b className="relative tracking-[0.2px] leading-[150%]">
                  My Classrooms
                </b>
              </div>
              <div className="rounded bg-royalblue h-6 hidden flex-row items-center justify-center p-2 box-border text-xs">
                <div className="relative leading-[160%] font-medium">150</div>
              </div>
            </div>
          </div>
          <div className="w-[250px] flex flex-row items-center justify-start py-0 px-6 box-border gap-[20px]">
            <div className="relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-greyscale-900 w-1 h-8 hidden" />
            <div className="w-[202px] h-12 flex flex-row items-center justify-start gap-[80px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/calendar.svg"
                />
                <div className="relative tracking-[0.2px] leading-[150%] font-medium">
                  All Students
                </div>
              </div>
              <div className="rounded bg-royalblue h-6 hidden flex-row items-center justify-center p-2 box-border text-xs text-neutral-00">
                <div className="relative leading-[160%] font-medium">150</div>
              </div>
            </div>
          </div>
          <div className="w-[250px] hidden flex-row items-center justify-start py-0 px-6 box-border gap-[20px]">
            <div className="relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-greyscale-900 w-1 h-8 hidden" />
            <div className="w-[202px] h-12 flex flex-row items-center justify-start gap-[80px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/history.svg"
                />
                <div className="relative tracking-[0.2px] leading-[150%] font-medium">
                  History
                </div>
              </div>
              <div className="rounded bg-royalblue w-[37px] h-6 hidden flex-row items-center justify-center p-2 box-border text-xs text-neutral-00">
                <div className="relative leading-[160%] font-medium">10</div>
              </div>
            </div>
          </div>
          <div className="w-[250px] hidden flex-row items-center justify-start py-0 px-6 box-border gap-[20px]">
            <div className="relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-greyscale-900 w-1 h-8 hidden" />
            <div className="w-[202px] h-12 flex flex-row items-center justify-start gap-[80px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/star.svg"
                />
                <div className="relative tracking-[0.2px] leading-[150%] font-medium">
                  App Integration
                </div>
              </div>
              <div className="rounded bg-royalblue h-6 hidden flex-row items-center justify-center p-2 box-border text-xs text-neutral-00">
                <div className="relative leading-[160%] font-medium">150</div>
              </div>
            </div>
          </div>
          <div className="w-[250px] hidden flex-row items-center justify-start py-0 px-6 box-border gap-[20px]">
            <div className="relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-greyscale-900 w-1 h-8 hidden" />
            <div className="w-[202px] h-12 flex flex-row items-center justify-start gap-[80px]">
              <div className="w-[202px] flex flex-row items-start justify-between">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                    alt=""
                    src="/mail.svg"
                  />
                  <div className="relative tracking-[0.2px] leading-[150%] font-medium">
                    Message
                  </div>
                </div>
                <div className="rounded bg-primary-50 h-6 flex flex-row items-center justify-center p-2 box-border text-xs text-new">
                  <div className="relative leading-[160%] font-medium">150</div>
                </div>
              </div>
              <div className="rounded bg-royalblue h-6 hidden flex-row items-center justify-center p-2 box-border text-xs text-neutral-00">
                <div className="relative leading-[160%] font-medium">150</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[29px] left-[27px] flex flex-row items-center justify-start gap-[5px] text-[21.55px] text-gray-900">
        <img
          className="relative w-6 h-[25.2px]"
          alt=""
          src="/group-1000004512.svg"
        />
        <div className="relative tracking-[-0.03em] leading-[124%] font-medium">
          MyCentrality
        </div>
      </div>
      <div className="absolute top-[152px] left-[1140px] w-64 h-[128.01px] text-mini text-neutral-07">
        <div className="absolute top-[0px] left-[0px] w-64 h-[128.01px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-neutral-00 shadow-[0px_40px_64px_-12px_rgba(0,_0,_0,_0.08),_0px_0px_14px_-4px_rgba(0,_0,_0,_0.05),_0px_32px_48px_-8px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(32px)] w-64 flex flex-col items-end justify-start">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[0.01px] shrink-0"
              alt=""
              src="/v.svg"
            />
            <div className="self-stretch rounded-2xl overflow-hidden flex flex-col items-start justify-start p-3">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch rounded-xl flex flex-row items-center justify-between p-3">
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/ui-iconchecklight.svg"
                    />
                    <div className="relative tracking-[-0.01em] leading-[24px] font-semibold">
                      Mark as read
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[12px] opacity-[0] text-center">
                    <div className="relative rounded-md bg-secondary-01 w-6 h-6 overflow-hidden shrink-0 hidden">
                      <div className="absolute w-full top-[0px] left-[0px] tracking-[-0.01em] leading-[24px] font-semibold inline-block">
                        8
                      </div>
                    </div>
                    <div className="relative w-6 h-6 overflow-hidden shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-3xl overflow-hidden flex flex-row items-center justify-center p-2 border-[2px] border-solid border-neutral-03">
                        <img
                          className="relative w-2 h-2"
                          alt=""
                          src="/add-icon.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="relative w-6 h-6"
                      alt=""
                      src="/cheveron.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-xl flex flex-row items-center justify-between p-3 text-neutral-04">
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/ui-icontrashlight.svg"
                    />
                    <div className="relative tracking-[-0.01em] leading-[24px] font-semibold">
                      Delete message
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[12px] opacity-[0] text-center text-neutral-07">
                    <div className="relative rounded-md bg-secondary-01 w-6 h-6 overflow-hidden shrink-0 hidden">
                      <div className="absolute w-full top-[0px] left-[0px] tracking-[-0.01em] leading-[24px] font-semibold inline-block">
                        8
                      </div>
                    </div>
                    <div className="relative w-6 h-6 overflow-hidden shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-3xl overflow-hidden flex flex-row items-center justify-center p-2 border-[2px] border-solid border-neutral-03">
                        <img
                          className="relative w-2 h-2"
                          alt=""
                          src="/add-icon.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="relative w-6 h-6"
                      alt=""
                      src="/cheveron.svg"
                    />
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

export default Chat;
