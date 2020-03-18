import React, {ReactNode, useState, useEffect} from 'react';
import {ScrollTopIcon} from './ScrollTopWrapperStyle';
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

interface ScrollTopWrapperProps {
    children: ReactNode;
}

const ScrollTopWrapper = (props: ScrollTopWrapperProps) => {
    const {children} = props;
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        let isCancelled = false;

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100 && !hasScrolled) {
                !isCancelled && setHasScrolled(true);
            } else if (window.pageYOffset < 100 && hasScrolled) {
                !isCancelled && setHasScrolled(false);
            }
        });

        // Cleanup function
        return () => { isCancelled = true; }
    }, [hasScrolled]);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
      <>
        {hasScrolled && (
          <ScrollTopIcon className="HERE" onClick={scrollToTop}>
            <ArrowUpwardIcon fontSize="large" />
          </ScrollTopIcon>
        )}

        <div>{children}</div>
      </>
    );
}

export default ScrollTopWrapper;