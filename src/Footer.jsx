import { scale } from 'motion';
import { motion } from 'motion/react';

const Footer = () => {
    
    return (
        <div className='mt-[200px] w-screen px-5 py-20 gap-2 items-start flex  bg-gray-200'>
            <div className='w-1/4 flex flex-col gap-4 mx-7'>
                <p className='font-[WDXL_Lubrifont_TC] font-bold mr-8 text-5xl text-green-400'>CARE<span className='underline underline-offset-6 decoration-[#fc5d82]'>ER CO</span>DE</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis a exercitationem, est minima corrupti repellat reiciendis. Aliquid impedit reiciendis nihil.</p>
                <div className='flex gap-3'>
                    <div className='border-2 rounded-[100%] p-2 border-[#05df72]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128">
                            <path fill={"#05df72"} d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38" />
                        </svg>
                    </div>
                    <div className='border-2 rounded-[100%] p-2 border-[#05df72]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                            <path fill={"#05df72"} d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" />
                        </svg>
                    </div>
                    <div className='border-2 rounded-[100%] p-2 border-[#05df72]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 14 14">
                            <g fill="none">
                                <g clip-path="url(#primeTwitter0)">
                                    <path fill={"#05df72"} d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" />
                                </g>
                                <defs>
                                    <clipPath id="primeTwitter0">
                                        <path fill="#fff" d="M0 0h14v14H0z" />
                                    </clipPath>
                                </defs>
                            </g>
                        </svg>
                    </div>
                    <div className='border-2 rounded-[100%] p-2 border-[#05df72]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                            <path fill={"#05df72"} d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='flex gap-10 ml-10'>
                <div className='w-1/4 flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold'><span className='underline decoration-2 decoration-green-400 underline-offset-3'>Job</span> Categories</h1>
                    <div className='flex flex-col gap-2'>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 1</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 2</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 3</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 4</motion.p>
                    </div>
                </div>
                <div className='w-1/4 flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold'><span className='underline decoration-2 decoration-green-400 underline-offset-3'>Job</span> Categories</h1>
                    <div className='flex flex-col gap-2'>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 1</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 2</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 3</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 4</motion.p>
                    </div>
                </div>
                <div className='w-1/4 flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold'><span className='underline decoration-2 decoration-green-400 underline-offset-3'>Job</span> Categories</h1>
                    <div className='flex flex-col gap-2'>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 1</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 2</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 3</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 4</motion.p>
                    </div>
                </div>
                <div className='w-1/4 flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold'><span className='underline decoration-2 decoration-green-400 underline-offset-3'>Job</span> Categories</h1>
                    <div className='flex flex-col gap-2'>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 1</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 2</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 3</motion.p>
                        <motion.p whileHover={{ color: "#50df72", x: 3 }} className='text-lg'>Job Page 4</motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;