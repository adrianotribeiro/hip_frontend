"use cliente"
import React from "react"
import FormComponent from "components/FormComponent"
export default function FormSection(): React.ReactElement {
  return (
    <section className="flex flex-col-reverse gap-6 bg-brasao2 bg-contain bg-center bg-no-repeat py-8 md:gap-12 xl:h-fit xl:flex-row xl:gap-3 4xl:h-fit">
      <div className="flex w-full items-center 4xl:w-[80%]">
        <FormComponent />
      </div>
      <div className="flex flex-col gap-6  xl:w-[100%] xl:items-end xl:gap-6 xl:pt-4 4xl:pr-16">
        <p className="px-8 text-center text-[2rem] leading-7 md:text-[3rem] md:leading-10 xl:w-[85%] xl:text-right 4xl:text-[3rem]">
          Lorem Ipsum dolor sit amet, consectetur adispiscing elit.
        </p>
        <div className="flex flex-col gap-3 px-8 xl:items-end">
          <p className="text-center text-[1.3rem] text-[white] md:text-[1.8rem] xl:w-[100%] xl:text-right xl:text-[2rem] xl:tracking-tight 4xl:w-[85%] 4xl:text-[2.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, arcu fermentum semper efficitur,
            risus quam imperdiet neque, sit amet ullamcorper purus eros vitae nunc
          </p>
          <p className="text-center text-[1.3rem] text-[white] md:text-[1.8rem] xl:w-[100%] xl:text-right xl:text-[2rem] xl:tracking-tight 4xl:w-[85%] 4xl:text-[2.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, arcu fermentum semper efficitur,
            risus quam imperdiet neque, sit amet ullamcorper purus eros vitae nunc
          </p>
        </div>
      </div>
    </section>
  )
}
