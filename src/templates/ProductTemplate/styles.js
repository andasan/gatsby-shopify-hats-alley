import styled from 'styled-components'

export const Grid = styled.section`
    display: grid;
grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
`

export const SelectWrapper = styled.div`
    margin-top: 40px;
    > strong {
        display: block;
        margin-bottom: 8px;
    }
`