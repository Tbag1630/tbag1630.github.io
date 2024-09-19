footer {
    background-color: var(--secondary-color);
    color: #ffffff;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
}

@media screen and (max-width: 768px) {
    .nav-links {
        position: absolute;
        right: 0px;
        height: 92vh;
        top: 8vh;
        background-color: var(--secondary-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        transform: translateX(100%);
        transition: transform 0.5s ease-in;
    }

    .nav-links li {
        opacity: 0;
    }

    .burger {
        display: block;
    }

    .nav-active {
        transform: translateX(0%);
    }

    .timeline::after {
        left: 31px;
    }

    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }

    .timeline-item::before {
        left: 60px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }

    .timeline-item::after {
        left: 15px;
    }

    .timeline-item:nth-child(even) {
        left: 0%;
    }
}

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}

.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
    opacity: 0;
}

.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}
