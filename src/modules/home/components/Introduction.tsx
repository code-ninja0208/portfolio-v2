const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>Hi, I&apos;m Volodymyr</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              Based in Zaporizhzhya, Ukraine <span className='ml-1'>🇺🇦</span>
            </li>
            <li>Working freelancer</li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        As a Full Stack Blockchain Engineer with 7+ years of experience, I am familar with Blockchain
        and Web development using Solana, JavaScript, PHP, Python, Rust & their frameworks like Laravel,
        WordPress, React, Next.js, React Native, Node.js, Express, Nest, Django, .Net, Rocket and 
        cutting-edge domains like Web3. Additionally, I have strong background of Data Science like AI, ML and now I
        am studying about Rust.
      </p>
    </section>
  );
};

export default Introduction;
