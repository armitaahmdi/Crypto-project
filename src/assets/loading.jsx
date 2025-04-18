export default function Loading({ backgroundColor = '#000' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-24 h-24"
        >
            <rect fill={backgroundColor} width="100%" height="100%" />
            {[25, 85, 145].map((x, i) => (
                <rect
                    key={i}
                    fill="#1FC1FF"
                    stroke="#1FC1FF"
                    strokeWidth="15"
                    width="30"
                    height="30"
                    x={x}
                    y="85"
                >
                    <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="2s"
                        values="1;0;1;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin={`${-0.4 + i * 0.2}s`}
                    />
                </rect>
            ))}
        </svg>
    );
}
