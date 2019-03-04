import React from 'react';

export default class Blog extends React.Component {
    render() {
        return (<div className="card-text">
            <div className="img-blog-wrapper">
                <img src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png" className="image-blog--cover" alt="My.jpg" />
                <div className="blog-p">
                    <p style={{ fontWeight: 200, fontStyle: 'italic', color: 'white' }}>
                        <strong>
                            <a style={{ textDecoration: 'none', color: 'Black' }}
                                href="https://medium.com/@sr.hassan23/crash-only-software-a7db5c703704">
                                Crash Only Softwate:
                    </a>
                        </strong>
                        The article is a brief summary of a researh paper which argues in favour of a system which instead of
                        shut down or reboot, just crashes and recover
                    </p>
                </div>
            </div>


        </div>);
    }
}