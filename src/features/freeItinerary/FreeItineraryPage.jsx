import { useState } from 'react';
import {
  CalendarDays,
  Car,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Lock,
  MapPinned,
  MessageCircle,
  Palmtree,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

import heroFamilyDriver from '../../../public/assets/FreeItinerary/hero-family-driver.webp';

const travelTypes = [
  'Family Trip',
  'Couple Trip',
  'Honeymoon',
  'Friends Group',
  'Solo Travel',
  'Other',
];


const budgetLevels = ['Budget', 'Mid Range', 'Luxury', 'Not Sure Yet'];
const driverOptions = [
  'Yes, I need a private driver',
  'Maybe, I need route advice',
  'No, itinerary only',
];

const interests = [
  'Private Driver / Road Trip',
  'Airport Pickup / Drop',
  'Kandy / Ella Route',
  'Sigiriya / Cultural Triangle',
  'Safari Transfers',
  'South Coast Transfers',
  'Train + Driver Mix',
  'Honeymoon Route',
  'Family Friendly Route',
  'Beaches',
  'Wildlife Safari',
  'Hill Country',
];

const benefits = [
  {
    title: 'Free Driver Cost Estimate',
    description: 'Send your route, dates, and group size. We will estimate the best private driver option for your trip.',
    icon: Car,
  },
  {
    title: 'Route-Based Travel Advice',
    description: 'Get help choosing where to use a driver and where to use the scenic train, especially Kandy to Ella.',
    icon: MapPinned,
  },
  {
    title: 'Airport, Safari & Transfers',
    description: 'We can help with airport pickup, Sigiriya, Kandy, Ella, safari routes, and south coast transfers.',
    icon: Plane,
  },
  {
    title: 'No Booking Pressure',
    description: 'Ask for the cost first. Book only if the route, vehicle, and price feel right for your trip.',
    icon: HeartHandshake,
  },
];

const steps = [
  {
    title: 'Send your route',
    description: 'Share your travel dates, pickup city, places, group size, and vehicle preference.',
    icon: Users,
  },
  {
    title: 'We check the best option',
    description: 'Our local team suggests a realistic route with private driver or train + driver options.',
    icon: MapPinned,
  },
  {
    title: 'You get the cost estimate',
    description: 'Receive a free route idea and driver cost estimate before you decide to book.',
    icon: CheckCircle2,
  },
];

const faqs = [
  {
    question: 'Is the private driver cost estimate free?',
    answer:
      'Yes. The first route idea and private driver cost estimate are free. We use your dates, route, number of travelers, luggage, and vehicle preference to suggest a suitable option.',
  },
  {
    question: 'Do I need to book after receiving the cost?',
    answer:
      'No. There is no obligation to book. You can review the route and estimate first, then decide only if you are comfortable.',
  },
  {
    question: 'Can you arrange airport pickup and long transfers?',
    answer:
      'Yes. We can help with airport pickup and drop, Sigiriya, Kandy, Ella, safari routes, south coast transfers, and full round tours.',
  },
  {
    question: 'Can I mix train and private driver?',
    answer:
      'Yes. Many travelers take the scenic train for Kandy or Nanu Oya to Ella and use a private driver for luggage, airport transfers, Sigiriya, safari routes, and south coast travel.',
  },
  {
    question: 'What details do you need to estimate the cost?',
    answer:
      'We need your travel dates, number of travelers, pickup and drop locations, places you want to visit, luggage amount, and whether you prefer a car or van.',
  },
];

const initialFormData = {
  fullName: '',
  email: '',
  whatsapp: '',
  country: '',
  travelMonth: '',
  travelers: '',
  travelType: '',
  exactTripDays: '',
  pickupLocation: '',
  placesToVisit: '',
  budgetLevel: '',
  interests: [],
  privateDriver: '',
  message: '',
};

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjyaeel';

function FreeItineraryPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubmitted(false);
    setErrorMessage('');

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleInterestChange = (event) => {
    const { value, checked } = event.target;
    setSubmitted(false);
    setErrorMessage('');

    setFormData((currentData) => ({
      ...currentData,
      interests: checked
        ? [...currentData.interests, value]
        : currentData.interests.filter((interest) => interest !== value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Sri Lanka private driver cost request:', formData);

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({
          _subject: 'Sri Lanka Private Driver Cost Estimate Request',
          ...formData,
          interests: formData.interests.join(', '),
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Formspree request failed');
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error('Private driver cost Formspree error:', error);
      setErrorMessage(
        'Sorry, we could not submit your request right now. Please try again or message us on WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/94710455391?text=${encodeURIComponent(
    'Hi, I would like to get a private driver cost estimate for my Sri Lanka trip.'
  )}`;

  return (
    <div className="bg-[var(--color-light)] text-[var(--color-darkGray)]">
      {/* HERO */}
{/* HERO */}
  <section className="relative overflow-hidden bg-[var(--color-dark)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-dark)]" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-8 top-10 h-48 w-48 rounded-full bg-white blur-3xl" />
          <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-[var(--color-accent)] blur-3xl" />
          <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-[var(--color-secondary)] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-24">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles className="h-4 w-4 text-white" />
              Free private driver cost estimate
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[52px]">
              Sri Lanka Private Driver Cost Estimate
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Planning Sri Lanka from the UK, Europe, Australia or anywhere in the world? Send your route, dates, and group size. Our local team will share a free route idea with a private driver cost estimate — no payment and no obligation to book.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#itinerary-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-bold text-[var(--color-primary)] shadow-xl transition hover:bg-[var(--color-light)]"
              >
                Get Driver Cost Estimate
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Driver Cost
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <TrustPill icon={Lock} text="No payment required" />
              <TrustPill icon={ShieldCheck} text="Fast WhatsApp reply" />
              <TrustPill icon={HeartHandshake} text="No booking pressure" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[var(--color-light)]">
                <img
                  src={heroFamilyDriver}
                  alt="Travelers in Sri Lanka with private driver and local tour support"
                  className="h-[520px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/75 via-[var(--color-dark)]/10 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[var(--color-dark)]/55 p-5 text-white shadow-xl backdrop-blur-md">
                  <p className="text-sm font-semibold text-white/75">
                    Sri Lanka private driver support
                  </p>

                  <h2 className="mt-1 text-xl font-extrabold leading-snug sm:text-2xl">
                    Free route advice + private driver cost estimate
                  </h2>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-8 hidden rounded-2xl border border-[var(--color-midGray)] bg-white px-4 py-3 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[var(--color-dark)]">Free Cost Estimate</p>
                  <p className="text-xs text-[var(--color-darkGray)]">No payment required</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-32 hidden rounded-2xl border border-[var(--color-midGray)] bg-white px-4 py-3 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                  <Car className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[var(--color-dark)]">Driver Routes</p>
                  <p className="text-xs text-[var(--color-darkGray)]">Airport • Kandy • Ella</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BENEFITS */}
      <section className="bg-[var(--color-light)] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-[var(--color-lightGray)] bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="text-lg font-bold text-[var(--color-dark)]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--color-darkGray)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--color-primary)] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-white/70">
              Simple & transparent
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              How Your Driver Cost Estimate Works
            </h2>

            <p className="mt-5 leading-7 text-white/75">
              We keep the process simple so you can understand the route and transport cost before booking.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map(({ title, description, icon: Icon }, index) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-sm backdrop-blur"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--color-primary)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-4xl font-extrabold text-white/15">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="itinerary-form" className="bg-[var(--color-lightGray)] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Request your cost
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-dark)] sm:text-4xl">
              Get Your Private Driver Cost Estimate
            </h2>

            <p className="mt-5 leading-7 text-[var(--color-darkGray)]">
              Tell us your travel dates, pickup location, places you want to visit, and group size. We will suggest the best private driver or train + driver route for your Sri Lanka trip.
            </p>

            <div className="mt-8 space-y-4">
              <SideNote
                icon={CheckCircle2}
                title="Better details = better cost estimate"
                text="Pickup city, places, days, luggage, and vehicle preference help us estimate the driver cost more accurately."
              />

              <SideNote
                icon={ShieldCheck}
                title="Your information is protected"
                text="We only use your details to prepare your route and contact you about your driver cost request."
              />

              <SideNote
                icon={Clock}
                title="Faster reply on WhatsApp"
                text="For urgent travel dates, send us a WhatsApp message after submitting the form."
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[var(--color-midGray)] bg-[var(--color-light)] p-5 shadow-2xl sm:p-8"
          >
            {submitted && <SuccessPopup onClose={() => setSubmitted(false)} />}

            {errorMessage && (
              <div className="mb-6 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm font-medium text-red-700">
                {errorMessage}
              </div>
            )}

            <div className="mb-6 rounded-3xl border border-[var(--color-primary)] bg-white/70 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-6 w-6 flex-none text-[var(--color-primary)]" />

                <div>
                  <h3 className="font-bold text-[var(--color-dark)]">
                    Your driver cost request is safe
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--color-darkGray)]">
                    We only use your information to prepare your Sri Lanka route and private driver cost estimate. We do not sell your details, spam you, or share your information with third parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              <MiniBadge icon={Lock} text="Free estimate" />
              <MiniBadge icon={HeartHandshake} text="No booking pressure" />
              <MiniBadge icon={MessageCircle} text="WhatsApp support" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <Input
                label="Email Address (Optional)"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                label="WhatsApp Number"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />

              <Input
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />

              <Input
                label="Travel Month"
                name="travelMonth"
                value={formData.travelMonth}
                onChange={handleChange}
                placeholder="Example: March 2026"
              />

              <Input
                label="Number of Travelers"
                name="travelers"
                type="number"
                min="1"
                value={formData.travelers}
                onChange={handleChange}
              />

              <Select
                label="Travel Type"
                name="travelType"
                value={formData.travelType}
                onChange={handleChange}
                options={travelTypes}
              />

              <Input
                label="Trip Duration (Days)"
                name="exactTripDays"
                type="number"
                min="1"
                value={formData.exactTripDays}
                onChange={handleChange}
                placeholder="Example: 10"
              />

              <Input
                label="Pickup Location / Arrival Airport"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Example: Colombo Airport"
              />

              <Input
                label="Places You Want to Visit"
                name="placesToVisit"
                value={formData.placesToVisit}
                onChange={handleChange}
                placeholder="Example: Sigiriya, Kandy, Ella, Bentota"
              />

       

              <Select
                label="Transport Help Needed?"
                name="privateDriver"
                value={formData.privateDriver}
                onChange={handleChange}
                options={driverOptions}
              />
            </div>

 

            <label className="mt-7 block">
              <span className="text-sm font-bold text-[var(--color-dark)]">
                Route Details / Special Requests
              </span>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-2 w-full rounded-2xl border border-[var(--color-midGray)] bg-white/80 px-4 py-3 text-[var(--color-darkGray)] outline-none transition placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/20"
                placeholder="Tell us your pickup/drop locations, luggage amount, route plan, train ride plans, kids, hotel areas, or anything important."
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[var(--color-secondary)] disabled:cursor-not-allowed disabled:bg-gray-500"
            >
              {loading ? 'Sending Your Request...' : 'Get Driver Cost Estimate'}
            </button>

            <p className="mt-4 text-xs leading-5 text-[var(--color-darkGray)]">
              By submitting this form, you agree that we may contact you by email or WhatsApp about
              your Sri Lanka private driver cost request. No payment is required and there is no obligation to book.
            </p>
          </form>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="bg-[var(--color-light)] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-[var(--color-dark)] via-[var(--color-primary)] to-[var(--color-secondary)] p-8 text-center text-white shadow-2xl sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>

            <h2 className="mt-5 text-3xl font-extrabold">Need the Driver Cost Faster?</h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Message our team on WhatsApp with your travel dates, number of travelers, pickup city, and places you want to visit.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-[var(--color-primary)] shadow-lg transition hover:bg-[var(--color-light)]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Driver Cost
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-lightGray)] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-dark)]">
              Common Questions
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[var(--color-midGray)] bg-[var(--color-light)] p-6 shadow-sm open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-[var(--color-dark)]">
                  {faq.question}

                  <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-sm text-white">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-[var(--color-darkGray)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroCard({ icon: Icon, label, title, dark = false }) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        dark
          ? 'bg-[var(--color-dark)] text-white'
          : 'border border-[var(--color-lightGray)] bg-white/80'
      }`}
    >
      <Icon className={`h-8 w-8 ${dark ? 'text-white' : 'text-[var(--color-primary)]'}`} />

      <p className={`mt-8 text-sm font-semibold ${dark ? 'text-white/60' : 'text-gray-500'}`}>
        {label}
      </p>

      <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-[var(--color-dark)]'}`}>
        {title}
      </p>
    </div>
  );
}

function TrustPill({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
      <Icon className="h-4 w-4 text-white" />
      {text}
    </div>
  );
}

function MiniBadge({ icon: Icon, text }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs font-bold text-[var(--color-darkGray)]">
      <Icon className="h-4 w-4 text-[var(--color-primary)]" />
      {text}
    </div>
  );
}

function SideNote({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-[var(--color-midGray)] bg-[var(--color-light)] p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-bold text-[var(--color-dark)]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--color-darkGray)]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  min,
  placeholder = '',
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-[var(--color-dark)]">
        {label} {required && <span className="text-[var(--color-primary)]">*</span>}
      </span>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-[var(--color-midGray)] bg-white/80 px-4 py-3 text-[var(--color-darkGray)] outline-none transition placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/20"
      />
    </label>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-[var(--color-dark)]">{label}</span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-2xl border border-[var(--color-midGray)] bg-white/80 px-4 py-3 text-[var(--color-darkGray)] outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/20"
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function SuccessPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-dark)]/80 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[2rem] bg-[var(--color-light)] p-6 text-center shadow-2xl sm:p-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
          <CheckCircle2 className="h-9 w-9" />
        </div>

        <h2 className="mt-5 text-2xl font-extrabold text-[var(--color-dark)]">
          Cost Request Received!
        </h2>

        <p className="mt-3 leading-7 text-[var(--color-darkGray)]">
          Thank you. We received your trip details. Our team will contact you soon with your free Sri Lanka route idea and private driver cost estimate.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 font-bold text-white transition hover:bg-[var(--color-secondary)]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default FreeItineraryPage;