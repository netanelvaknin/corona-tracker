import styled from 'styled-components/macro';

export const ScrollTopIcon = styled.div`
         position: fixed;
         bottom: 5rem;
         left: 5rem;
         z-index: 999;
         background: ${props => props.theme.palette.primary.main};
         height: 7rem;
         width: 7rem;
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
         cursor: pointer;
         box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
         transition: all .2s;
         animation-name: bounceIn;
         animation-iteration-count: infinite;
         animation-duration: 10s;
         animation-fill-mode: both;

         @media (max-width: 960px) {
             left: 2rem;
             bottom: 2rem;
             width: 4.5rem;
             height: 4.5rem;
         }


         @-webkit-keyframes bounceIn {
           from,
           20%,
           40%,
           60%,
           80%,
           to {
             -webkit-animation-timing-function: cubic-bezier(
               0.215,
               0.61,
               0.355,
               1
             );
             animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
           }

           0% {
             opacity: 0;
             -webkit-transform: scale3d(0.3, 0.3, 0.3);
             transform: scale3d(0.3, 0.3, 0.3);
           }

           20% {
             -webkit-transform: scale3d(1.1, 1.1, 1.1);
             transform: scale3d(1.1, 1.1, 1.1);
           }

           40% {
             -webkit-transform: scale3d(0.9, 0.9, 0.9);
             transform: scale3d(0.9, 0.9, 0.9);
           }

           60% {
             opacity: 1;
             -webkit-transform: scale3d(1.03, 1.03, 1.03);
             transform: scale3d(1.03, 1.03, 1.03);
           }

           80% {
             -webkit-transform: scale3d(0.97, 0.97, 0.97);
             transform: scale3d(0.97, 0.97, 0.97);
           }

           to {
             opacity: 1;
             -webkit-transform: scale3d(1, 1, 1);
             transform: scale3d(1, 1, 1);
           }
         }

         @keyframes bounceIn {
           from,
           20%,
           40%,
           60%,
           80%,
           to {
             -webkit-animation-timing-function: cubic-bezier(
               0.215,
               0.61,
               0.355,
               1
             );
             animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
           }

           0% {
             opacity: 0;
             -webkit-transform: scale3d(0.3, 0.3, 0.3);
             transform: scale3d(0.3, 0.3, 0.3);
           }

           20% {
             -webkit-transform: scale3d(1.1, 1.1, 1.1);
             transform: scale3d(1.1, 1.1, 1.1);
           }

           40% {
             -webkit-transform: scale3d(0.9, 0.9, 0.9);
             transform: scale3d(0.9, 0.9, 0.9);
           }

           60% {
             opacity: 1;
             -webkit-transform: scale3d(1.03, 1.03, 1.03);
             transform: scale3d(1.03, 1.03, 1.03);
           }

           80% {
             -webkit-transform: scale3d(0.97, 0.97, 0.97);
             transform: scale3d(0.97, 0.97, 0.97);
           }

           to {
             opacity: 1;
             -webkit-transform: scale3d(1, 1, 1);
             transform: scale3d(1, 1, 1);
           }
         }

         .bounceIn {
           -webkit-animation-duration: 0.75s;
           animation-duration: 0.75s;
           -webkit-animation-name: bounceIn;
           animation-name: bounceIn;
         }
       `;