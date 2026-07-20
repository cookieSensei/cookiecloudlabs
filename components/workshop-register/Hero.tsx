import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">

      <div className="mx-auto max-w-5xl text-center">

        {/* Label */}

        <p className="mb-6 uppercase tracking-[0.3em] text-blue-400 font-semibold">
          Workshop Registration
        </p>

        {/* Heading */}

        <h1 className="font-bold leading-tight text-[clamp(2.75rem,6vw,5rem)]">
          Learn.
          
          Build.
          
          Contribute.
        </h1>

        {/* Description */}

        <p className="mx-auto mt-10 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
          Register your interest in an upcoming CookieSensei workshop.
          Once your registration and payment are confirmed, you'll receive
          access to our GitHub organization, workshop resources, and cloud
          development environment.
        </p>


        <div className="mt-20 animate-bounce text-gray-500 text-3xl">
            <ScrollIndicator
            text="Discover the Story"
            targetId="requirements"/>
        </div>
        
      </div>




        
    </section>

    
  );
}