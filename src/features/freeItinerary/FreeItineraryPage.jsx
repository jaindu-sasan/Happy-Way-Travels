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

import heroFamilyDriver from '../../../public/assets/FreeItinerary/hero-family-driver.png';

const travelTypes = [
  'Family Trip',
  'Couple Trip',
  'Honeymoon',
  'Friends Group',
  'Solo Travel',
  'Other',
];


const budgetLevels = ['Budget', 'Mid Range', 'Luxury', 'Not Sure Yet'];
const driverOptions = ['Yes', 'No', 'Maybe'];

const interests = [
  'Beaches',
  'Wildlife Safari',
  'Culture & History',
  'Hill Country',
  'Train Ride',
  'Adventure',
  'Ayurveda / Wellness',
  'Food Experience',
  'Cricket',
  'Family Friendly Activities',
];

const benefits = [
  {
    title: '100% Free Trip Plan',
    description: 'Get a custom Sri Lanka travel route without paying any planning fee.',
    icon: ShieldCheck,
  },
  {
    title: 'Built Around Your Interests',
    description: 'Beaches, safari, culture, hill country, family travel, honeymoon, or cricket trips.',
    icon: MapPinned,
  },
  {
    title: 'Private Driver Support',
    description: 'We can help with airport pickup, private driver, day tours, and full round tours.',
    icon: Car,
  },
  {
    title: 'No Booking Pressure',
    description: 'Use the itinerary for free. Book only if you feel comfortable with the plan.',
    icon: HeartHandshake,
  },
];

const steps = [
  {
    title: 'Tell us your plan',
    description: 'Share your travel month, group size, budget, and interests.',
    icon: Users,
  },
  {
    title: 'We create your route',
    description: 'Our local team prepares a realistic Sri Lanka itinerary for your trip.',
    icon: MapPinned,
  },
  {
    title: 'You decide freely',
    description: 'No payment needed. No obligation to book after receiving the plan.',
    icon: CheckCircle2,
  },
];

const faqs = [
  {
    question: 'Is the itinerary really free?',
    answer:
      'Yes. Your first custom Sri Lanka itinerary is free. We create it so you can understand the best route, travel time, and options before making decisions.',
  },
  {
    question: 'Do I need to book after receiving the itinerary?',
    answer:
      'No. There is no obligation to book. If you like the plan, we can also help arrange transport, hotels, activities, or a full tour package.',
  },
  {
    question: 'Can you arrange a private driver?',
    answer:
      'Yes. We can arrange private drivers for airport transfers, day tours, multi-day trips, and complete Sri Lanka round tours.',
  },
  {
    question: 'Can you help with hotels and activities?',
    answer:
      'Yes. We can suggest hotels, sightseeing stops, wildlife safaris, beaches, train rides, cultural visits, and family-friendly experiences.',
  },
  {
    question: 'How long does it take to receive the itinerary?',
    answer:
      'We usually reply as soon as possible after reviewing your details. For urgent travel plans, WhatsApp is the fastest way to contact us.',
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

    console.log('Free Sri Lanka itinerary request:', formData);

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({
          _subject: 'Free Sri Lanka Itinerary Request',
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
      console.error('Free itinerary Formspree error:', error);
      setErrorMessage(
        'Sorry, we could not submit your request right now. Please try again or message us on WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/94710455391?text=${encodeURIComponent(
    'Hi, I would like to get a free Sri Lanka itinerary for my trip.'
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
              Free custom travel planning
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[52px]">
              Plan Your Sri Lanka Trip for Free Before You Book
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Share your travel dates, interests, and budget. Our local Sri Lanka team will create a
              personalized route for free — no payment, no spam, and no obligation to book.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#itinerary-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-bold text-[var(--color-primary)] shadow-xl transition hover:bg-[var(--color-light)]"
              >
                Get My Free Itinerary
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <TrustPill icon={Lock} text="No payment required" />
              <TrustPill icon={ShieldCheck} text="Privacy respected" />
              <TrustPill icon={HeartHandshake} text="No obligation" />
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
                    Local Sri Lanka travel support
                  </p>

                  <h2 className="mt-1 text-xl font-extrabold leading-snug sm:text-2xl">
                    Private driver, custom route planning & local help
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
                  <p className="text-sm font-bold text-[var(--color-dark)]">Free Itinerary</p>
                  <p className="text-xs text-[var(--color-darkGray)]">No planning fee</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-32 hidden rounded-2xl border border-[var(--color-midGray)] bg-white px-4 py-3 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                  <Car className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[var(--color-dark)]">Driver Available</p>
                  <p className="text-xs text-[var(--color-darkGray)]">Optional service</p>
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
              How Your Free Itinerary Works
            </h2>

            <p className="mt-5 leading-7 text-white/75">
              We keep the process clear so you feel safe before sharing your travel details.
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
              Request your plan
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-dark)] sm:text-4xl">
              Share Your Trip Preferences
            </h2>

            <p className="mt-5 leading-7 text-[var(--color-darkGray)]">
              We help travelers plan Sri Lanka trips with custom routes, private drivers, airport
              transfers, hotels, sightseeing, wildlife safaris, beaches, hill country, and
              family-friendly travel ideas.
            </p>

            <div className="mt-8 space-y-4">
              <SideNote
                icon={CheckCircle2}
                title="Better details = better plan"
                text="Your preferred pace, must-see places, and travel style help us create a useful itinerary."
              />

              <SideNote
                icon={ShieldCheck}
                title="Your information is protected"
                text="We only use your details to prepare your itinerary and contact you about your trip request."
              />

              <SideNote
                icon={Clock}
                title="Faster reply on WhatsApp"
                text="For urgent trips, send us a WhatsApp message after submitting the form."
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
                    Your details are safe with us
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--color-darkGray)]">
                    We only use your information to prepare your free Sri Lanka itinerary and
                    contact you about your trip. We do not sell your details, spam you, or share
                    your information with third parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              <MiniBadge icon={Lock} text="No payment" />
              <MiniBadge icon={HeartHandshake} text="No obligation" />
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

              <Select
                label="Budget Level"
                name="budgetLevel"
                value={formData.budgetLevel}
                onChange={handleChange}
                options={budgetLevels}
              />

              <Select
                label="Need Private Driver?"
                name="privateDriver"
                value={formData.privateDriver}
                onChange={handleChange}
                options={driverOptions}
              />
            </div>

            <fieldset className="mt-7">
              <legend className="text-sm font-bold text-[var(--color-dark)]">
                What are you interested in?
              </legend>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                      formData.interests.includes(interest)
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                        : 'border-[var(--color-midGray)] bg-white/70 text-[var(--color-darkGray)] hover:border-[var(--color-primary)] hover:bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleInterestChange}
                      className="h-4 w-4 rounded border-[var(--color-midGray)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-7 block">
              <span className="text-sm font-bold text-[var(--color-dark)]">
                Message / Special Requests
              </span>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-2 w-full rounded-2xl border border-[var(--color-midGray)] bg-white/80 px-4 py-3 text-[var(--color-darkGray)] outline-none transition placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/20"
                placeholder="Tell us about arrival airport, must-see places, kids, hotel style, celebrations, food preferences, or anything important."
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[var(--color-secondary)] disabled:cursor-not-allowed disabled:bg-gray-500"
            >
              {loading ? 'Sending Your Request...' : 'Get My Free Itinerary'}
            </button>

            <p className="mt-4 text-xs leading-5 text-[var(--color-darkGray)]">
              By submitting this form, you agree that we may contact you by email or WhatsApp about
              your Sri Lanka trip request. No payment is required and there is no obligation to book.
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

            <h2 className="mt-5 text-3xl font-extrabold">Want a Faster Reply?</h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Message our team on WhatsApp and tell us your travel dates, group size, and places
              you would love to visit.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-[var(--color-primary)] shadow-lg transition hover:bg-[var(--color-light)]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
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
          Request Received!
        </h2>

        <p className="mt-3 leading-7 text-[var(--color-darkGray)]">
          Thank you. We received your trip details. Our team will contact you soon with your free
          Sri Lanka itinerary.
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