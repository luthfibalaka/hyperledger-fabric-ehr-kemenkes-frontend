export default function Footer() {
    const latestYear = new Date().getFullYear()
    return (
        <footer className="footer has-background-link-dark has-text-link-light">
            <div className="content has-text-centered">
                <p>
                    &copy; <span>{latestYear}</span>{' '}
                    <a
                        className="has-text-link-light"
                        href="https://github.com/luthfibalaka/hyperledger-fabric-ehr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hyperledger Fabric EHR.
                    </a>{' '}
                    All rights reserved.
                </p>
            </div>
        </footer>
    )
}