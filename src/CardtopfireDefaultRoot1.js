import React from "react";
import styled from "styled-components";

export const CardtopfireDefaultRoot1 = ({}) => {
  return (
    <CardtopfireDefaultRootRoot>
      <Cardbg>
        <Cardbggraddiv>
          <Headertop>
            <Cardheader>
              <Logofire>
                <Firelogowhite
                  src={`https://file.rendit.io/n/tUjhUyKsxxvwGlHaLwyC.png`}
                />
              </Logofire>
            </Cardheader>
            <Cardname>
              <Text1>cHARIZARD</Text1>
            </Cardname>
          </Headertop>
          <Cardsprite>
            <Pokemonimg
              src={`https://file.rendit.io/n/PoNteeitFxl8XvUxqGgZ.png`}
            />
            <Element1>
              <Bgwhitelogo>
                <FlexRow>
                  <Shiny>
                    <Shinyicon
                      src={`https://file.rendit.io/n/zQoT5MvXYHC0AwStt1Py.svg`}
                    />
                  </Shiny>
                </FlexRow>
              </Bgwhitelogo>
              <Cardbgwhite />
            </Element1>
          </Cardsprite>
          <Cardbggradbottom />
        </Cardbggraddiv>
      </Cardbg>
    </CardtopfireDefaultRootRoot>
  );
};

const CardtopfireDefaultRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  isolation: isolate;
  position: relative;
  width: 200px;
  height: 250px;
  border-radius: 4px;
`;
const Cardbg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 200px;
  height: 250px;
  right: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
`;
const Cardbggraddiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px 2px 10px;
  isolation: isolate;
  width: 200px;
  height: 250px;
  background: linear-gradient(
    121.52deg,
    #f39200 16.89%,
    #ce4a00 66.62%,
    #ffad31 97.58%
  );
  border-radius: 4px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;
const Headertop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 200px;
  height: 20px;
  left: calc(50% - 200px / 2);
  top: 0px;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 3;
`;
const Cardheader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 62px 0px 5px;
  isolation: isolate;
  width: 88px;
  height: 20px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;
const Logofire = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 21px;
  height: 20px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  z-index: 0;
`;
const Firelogowhite = styled.img`
  width: 16px;
  height: 15.11px;
  background: url(top-logo-fire.png);
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Cardname = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px 8px 0px 0px;
  width: 112px;
  height: 20px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
const Text1 = styled.div`
  width: 104px;
  height: 20px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: right;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  flex: none;
  order: 0;
  flex-grow: 1;
`;
const Cardsprite = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  isolation: isolate;
  position: absolute;
  left: 2px;
  right: 2px;
  top: 21px;
  bottom: 10px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 2;
`;
const Pokemonimg = styled.img`
  width: 198px;
  height: 200.68px;
  background: url(image.png);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 2;
`;
const Element1 = styled.div`
  position: absolute;
  width: 210px;
  height: 258px;
  left: -7px;
  top: -6px;
  background: linear-gradient(
    89.38deg,
    rgba(245, 157, 25, 0.8) 22.35%,
    rgba(206, 74, 0, 0.8) 97.96%
  );
  opacity: 0.25;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
  background-image: url("https://file.rendit.io/n/q7uZZTJJiW7QhyGWKYDm.svg");
`;
const Bgwhitelogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 13px 0px 4px;
  isolation: isolate;
  position: absolute;
  width: 196px;
  height: 220px;
  left: calc(50% - 196px / 2);
  top: calc(50% - 220px / 2 + 0.5px);
  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 0;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  isolation: isolate;
  position: absolute;
  width: 197px;
  height: 28px;
  left: calc(50% - 197px / 2 + 0.5px);
  bottom: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
`;
const Shiny = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px 10px 0px 0px;
  gap: 10px;
  position: absolute;
  width: 32px;
  height: 22px;
  right: 0px;
  top: calc(50% - 22px / 2);
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
`;
const Shinyicon = styled.img`
  width: 22px;
  height: 17px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Cardbgwhite = styled.div`
  position: absolute;
  width: 196px;
  height: 219px;
  left: calc(50% - 196px / 2);
  top: calc(50% - 219px / 2 + 5.5px);
  background: #f6f6f6;
  border-radius: 4px;
  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 1;
`;
const Cardbggradbottom = styled.div`
  position: absolute;
  width: 200px;
  height: 9px;
  left: 0px;
  top: 241px;
  background: linear-gradient(
    114.42deg,
    #ce4a00 -8.13%,
    #f59d19 7.33%,
    #f59d19 35.07%,
    #f5c519 46.17%,
    #ffad31 55.29%
  );
  border-radius: 0px 1px 4px 4px;
  flex: none;
  order: 3;
  flex-grow: 0;
  z-index: 0;
`;
