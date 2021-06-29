



import styled from 'styled-components';
import { FlexRow,FlexCol,FlexBox } from '../../../Global.style';

export const ProductBox = styled(FlexRow)`
    margin-top:3rem;
    width: 1651px;
    height: 713px;
`;
export const ProductViewBox= styled(FlexCol)`
    width: 501px;
    height: 702px;
    
`;

export const ProductDisecriptionBox = styled(FlexCol)`
    width: 1134px;
    height: 702px;
    
`
export const PathBox = styled(FlexRow)`
    justify-content: flex-start;
    margin-top:1rem;
`
export const RowImgs= styled(FlexRow)`
    height: 142px;
    width: 501px;
`
export const CircleColor=styled('div')`
    height: 50px;
    width:50px;
    border-radius: 50%;
    margin-right:2rem;
    background: ${(props)=> props.color?props.color:"#000"};
    cursor: pointer;
    &:hover{
        border: 1px solid #000;
        
    }
`
export const SizeField= styled(FlexBox)`
    width: 135px;
    height: 40px;;
    margin-right:2rem;
    background: #F5F5F5;
    border-radius: 10px;
    cursor: pointer;
`;

export const ReviewsBox= styled(FlexCol)`
    justify-content: flex-start;
    width: 1586px;
    height: auto;  
    margin-bottom:2rem;
`
export const SubReviewsBox= styled(FlexCol)`
    width: 1586px;
    height: auto;
    border: 1px solid #BCBCBC;
    align-items: center
`