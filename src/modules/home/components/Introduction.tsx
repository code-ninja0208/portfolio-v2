const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat'>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl font-medium lg:text-3xl'>
          <h1>Hi, I&apos;m code-ninja0208</h1>
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>Data Engineer &amp; AI / Data Systems</li>
            <li>Full-Stack &amp; Web3 Developer</li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        I build reliable data platforms, AI-powered applications and scalable software systems. My work spans
        data engineering, ETL / ELT pipelines, backend APIs, analytics, full-stack products and Web3 integrations.
        I enjoy turning raw data into dependable systems and useful products with Python, SQL, modern web
        technologies and cloud-native tooling.
      </p>
    </section>
  );
};

export default Introduction;
