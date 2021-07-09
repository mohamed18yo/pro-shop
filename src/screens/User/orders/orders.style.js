




import styled from "styled-components";
import { FlexRow } from "../../../Global.style";

export const RowCell= styled(FlexRow)`
    width:100%;
    height:40px;
    background: #e8e8e8;
    border-radius: 5px;
    padding: 1rem;
    margin-top:2px;
    &:hover{
        border-bottom: 1px solid #707070;
        background: #dedddd;
    }
`;