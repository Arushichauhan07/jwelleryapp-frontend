

const Slider = () => {
  return (
    <div className="p-0 m-0 h-16 w-full overflow-hidden flex items-center text-[#250902]">
                <div
                    className="
                    flex whitespace-nowrap text-xl font-bold
                    animate-[marquee_40s_linear_infinite]
                    "
                    style={{
                        animationName: 'marquee',
                        animationDuration: '40s',
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                    }}
                    >
                    {/* First batch of 8 "Sale" */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <span key={`a-${i}`} className="mx-20">
                            Sale
                        </span>
                    ))}

                    {/* Duplicate batch for seamless loop */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <span key={`b-${i}`} className="mx-20">
                            Sale
                        </span>
                    ))}
                </div>

                {/* Inline keyframes */}
                <style>
                    {`
                        @keyframes marquee {
                            0% { transform: translateX(0%); }
                            100% { transform: translateX(-50%); }
                        }
                        `}
                </style>
            </div>
  )
}

export default Slider