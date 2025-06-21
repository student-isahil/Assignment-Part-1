'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is required"),
  timeFrame: z.string().min(1, "Time Frame is required"),
  size: z.string().min(1, "Size is required"),
  quantity: z.string().min(1, "Quantity is required"),
  projectDesc: z.string().min(5, "Project description is required"),
})

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data) => {
    console.log("Form Submitted:", data)
    alert("Form submitted successfully!")
  }

  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">REQUEST A QUOTE</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        <Input {...register("name")} placeholder="Name" />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

        <Input {...register("email")} placeholder="Email" />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

        <Input {...register("phone")} placeholder="Phone Number" />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}

        {/* Time Frame */}
        <select {...register("timeFrame")} className="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Choose Time Frame</option>
          <option value="1 Week">1 Week</option>
          <option value="1 Month">1 Month</option>
        </select>
        {errors.timeFrame && <p className="text-sm text-red-500">{errors.timeFrame.message}</p>}

        {/* Size */}
        <select {...register("size")} className="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Choose Size</option>
          <option value="Small">Small</option>
          <option value="Large">Large</option>
        </select>
        {errors.size && <p className="text-sm text-red-500">{errors.size.message}</p>}

        {/* Quantity */}
        <select {...register("quantity")} className="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Choose Quantity</option>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        {errors.quantity && <p className="text-sm text-red-500">{errors.quantity.message}</p>}

        <Textarea
          {...register("projectDesc")}
          placeholder="Describe your project"
          className="col-span-2"
          rows={5}
        />
        {errors.projectDesc && <p className="text-sm text-red-500">{errors.projectDesc.message}</p>}

        <p className="col-span-2 text-center text-sm text-gray-500">
          By submitting this form you agree to our <a className="underline">Terms of Service</a> and <a className="underline">Privacy Policy</a>.
        </p>

        <div className="col-span-2 flex justify-center">
          <Button type="submit" className="px-8">Lorem Ipsum →</Button>
        </div>
      </form>
    </section>
  )
}
