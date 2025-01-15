'use client';

import { useState } from 'react';
import { Code, BookOpen, Users, Blocks } from 'lucide-react';
import { useRouter } from 'next/navigation';

const features = [
  {
    icon: Code,
    title: 'Interactive Learning',
    description:
      'Gain hands-on experience with coding challenges and projects.',
  },
  {
    icon: BookOpen,
    title: 'Expert-Curated Content',
    description: 'Learn from high-quality content created by industry experts.',
  },
  {
    icon: Blocks,
    title: 'Flexible Learning',
    description: 'Follow structured paths or explore topics at your own pace.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a global community of learners and mentors.',
  },
];

export default function Hero() {
  const [hoveredFeature, setHoveredFeature] = useState(-1);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(76,29,149,0.1) 0%, rgba(76,29,149,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          animation: 'float 20s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          animation: 'float 25s ease-in-out infinite reverse',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          width: '30%',
          height: '30%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(236,72,153,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          animation: 'float 18s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '25%',
          height: '25%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          animation: 'float 22s ease-in-out infinite reverse',
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <section
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <h2
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              background: 'linear-gradient(45deg, #6d28d9, #db2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 8s ease infinite',
            }}
          >
            Your Journey to Programming Excellence Starts Here
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              maxWidth: '800px',
              margin: '0 auto',
              marginBottom: '40px',
            }}
          >
            XLearn provides a comprehensive, interactive platform designed to
            help you learn programming languages and frameworks from scratch to
            expert level.
          </p>
          <button
            style={{
              backgroundColor: '#6d28d9',
              color: '#fff',
              padding: '12px 24px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden',
              transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)',
              boxShadow: isButtonHovered
                ? '0 0 20px rgba(109, 40, 217, 0.5)'
                : 'none',
            }}
            onClick={() => router.push('/learn')}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>
              Start Learning Now
            </span>
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                transform: isButtonHovered ? 'scale(1)' : 'scale(0)',
                transition: 'transform 0.5s',
              }}
            />
          </button>
        </section>

        <section style={{ padding: '40px' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '40px',
              textAlign: 'center',
              background: 'linear-gradient(45deg, #6d28d9, #db2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 8s ease infinite',
            }}
          >
            Why Choose XLearn?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '30px',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transform:
                    hoveredFeature === index
                      ? 'translateY(-10px)'
                      : 'translateY(0)',
                  boxShadow:
                    hoveredFeature === index
                      ? '0 10px 20px rgba(0, 0, 0, 0.2)'
                      : 'none',
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(-1)}
              >
                <feature.icon
                  size={40}
                  style={{ marginBottom: '20px', color: '#6d28d9' }}
                />
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#ccc' }}>
                  {feature.description}
                </p>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(45deg, rgba(109, 40, 217, 0.1), rgba(219, 39, 119, 0.1))',
                    opacity: hoveredFeature === index ? 1 : 0,
                    transition: 'opacity 0.3s',
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
