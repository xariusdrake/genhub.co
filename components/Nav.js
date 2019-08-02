import { withRouter } from 'next/router';
import classnames from "classnames";
import Link from 'next/link';

export default withRouter(({ options, render, center, router }) => (
    <div className="nav">
        <div className={classnames("nav-options", {
            "nav-options-center": center
        })}>
            {options.map((option, i) => (
                <Link key={`option-${i}`} href={{ pathname: router.route, query: { ...router.query, tab: option }}} >
                    <a className={classnames("nav-option", {
                        "selected": router.query.tab == option
                    })}>
                        <span className="nav-option-span">{option}</span>
                        {router.query.tab == option ? <div className="nav-option-indicator" /> : null}
                    </a>
                </Link>
            ))}
        </div>
        <div className="nav-content">
            {options.includes(router.query.tab) ? render(router.query.tab) : (
                <div className="nav-tab-not-found">
                    <h3 className="title">Not Found</h3>
                    <p className="text">The page you are looking for doesn’t exist.</p>
                </div>
            )}
        </div>
        <style jsx>{`
            .nav {
                font-family: "PT Sans", sans-serif;
            }

            .nav-options-center {
                text-align: center;
            }

            .nav-options {
                border-bottom: 1px solid #f2f3f4;
            }

            .nav-option {
                color: black;
                text-decoration: none;
                margin-right: 15px;
                cursor: pointer;
                display: inline-block;
                vertical-align: top;
            }

            .nav-option:hover {
                color: #007fff;
            }

            .selected {
                color: #007fff;
            }

            .nav-option-indicator {
                height: 6px;
                width: 6px;
                margin: 0 auto 3px;
                background: #007fff;
                border-radius: 50%;
            }

            .nav-content {
                padding: 30px 0;
            }

            .nav-tab-not-found {
                text-align: center;
            }
        `}</style>
    </div>
));