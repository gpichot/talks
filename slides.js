
import { Side, ItemsColumn, Image } from '@gpichot/spectacle-deck'
import { Text, Appear } from '@gpichot/spectacle-deck'
import { HorizontalList } from '@gpichot/spectacle-deck'
import { HorizontalListItem } from '@gpichot/spectacle-deck'
import me from './assets/gabriel.jpg'
import mongodbEmail from './assets/mongodb-email.png'
import mongoMongooseCompatibility from './assets/mongodb-mongoose-compatibility.png'
import nervousKeyAndPeele from './assets/nervousKeyAnPeele.gif'
import successKid from './assets/success-kid.png'
import drake from './assets/drake.png'
import fullmigration from './assets/fullmigration.png'
import filesSmall from './assets/files-small.png'
import filesBig from './assets/files-big.png'
import incrementalMigration from './assets/incremental-migration.png'
import step1 from './assets/step-1.png'
import step2 from './assets/step-2.png'
import feedbackQR from './assets/feedback-qr.png'


import React from 'react';
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";import {useMDXComponents as _provideComponents} from "@mdx-js/react" 

 
export function Slide0(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"mainSection"} };
  const _components = {
    em: "em",
    h1: "h1",
    p: "p",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(_components.h1, {
      children: _jsx(_components.strong, {
        children: "Crossing the bridge"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.em, {
        children: "Seamless strategies for updating and migrating libraries"
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide1(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"sidedImage","position":"left"} };
  const _components = {
    a: "a",
    em: "em",
    p: "p",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(Image, {
      src: me,
      alt: "Gabriel",
      style: {
        objectFit: 'cover'
      }
    }), "\n", _jsxs(_components.p, {
      children: ["👋 I am ", _jsx(_components.strong, {
        children: "Gabriel Pichot"
      }), ", and I am:"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Teaching"
      }), " @ Supinfo", _jsx("br", {}), "\n", _jsx(_components.em, {
        children: "JavaScript, TypeScript, React, Node.js"
      })]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Doing workshops"
      }), " @ Human Coders/CraftValue", _jsx("br", {}), "\n", _jsx(_components.em, {
        children: "Advanced React, NodeJS, TypeScript"
      })]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Freelancing"
      }), " @ CraftValue", _jsx("br", {}), "\n", _jsx(_components.em, {
        children: "Currently Tech Lead"
      })]
    }), "\n", _jsx(_components.p, {
      children: _jsxs(_components.em, {
        children: ["I post sometimes on ", _jsx(_components.a, {
          href: "https://www.linkedin.com/in/gabrielpichot/",
          children: "LinkedIn"
        })]
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide2(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    h2: "h2",
    p: "p",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsxs(_components.h2, {
      children: ["Some ", _jsx(_components.strong, {
        children: "Context"
      })]
    }), "\n", _jsx(Side, {
      children: _jsxs(ItemsColumn, {
        children: [_jsx(_components.p, {
          children: "1 front (React)"
        }), _jsx(_components.p, {
          children: "~20 microservices/gateways (Node.js/Express)"
        }), _jsxs(_components.p, {
          children: ["~180k locs about 1 year ago", _jsx("br", {}), "\n~250k locs now"]
        }), _jsx(_components.p, {
          children: "Team: between 3 and 6 people"
        })]
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide3(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    code: "code",
    pre: "pre",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(Image, {
      src: mongodbEmail,
      alt: "Mongodb email",
      style: {
        maxHeight: 500
      }
    }), "\n", _jsx(Side, {
      children: _jsxs(ItemsColumn, {
        children: [_jsx(_components.pre, {
          children: _jsx(_components.code, {
            className: "language-json",
            children: "  \"mongoose\": \"^5.13.0\",\n"
          })
        }), _jsx(Image, {
          src: mongoMongooseCompatibility,
          alt: "Mongodb mongoose compatibility",
          style: {
            maxHeight: 150
          }
        })]
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide4(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    p: "p",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsxs(Text, {
      style: {
        display: 'flex',
        flexFlow: 'row',
        gap: '2rem'
      },
      children: [_jsx(Appear, {
        children: _jsx(_components.p, {
          children: "No TypeScript"
        })
      }), _jsx(Appear, {
        children: _jsx(_components.p, {
          children: "No Integration Tests"
        })
      }), _jsx(Appear, {
        children: _jsx(_components.p, {
          children: "150+ lines impacted"
        })
      })]
    }), "\n", _jsx(Appear, {
      children: _jsx(Image, {
        src: nervousKeyAndPeele,
        alt: "Nervous Key and Peele",
        height: 400,
        style: {
          maxHeight: 500
        }
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide5(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    code: "code",
    pre: "pre",
    ..._provideComponents(),
    ...props.components
  };
  const _content =    _jsxs("div", {
    style: {
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    },
    children: [_jsx(Appear, {
      children: _jsx(Image, {
        src: successKid,
        alt: "Success Kid",
        style: {
          maxHeight: 300
        }
      })
    }), _jsx("div", {
      children: _jsx(Appear, {
        children: _jsx(_components.pre, {
          children: _jsx(_components.code, {
            children: "157 files changed\n9102 insertions(+)\n8774 deletions(-)\n"
          })
        })
      })
    }), _jsx(Appear, {
      children: _jsx(Image, {
        src: drake,
        alt: "Drake",
        style: {
          maxHeight: 300
        }
      })
    })]
  });;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide6(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    h3: "h3",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(Image, {
      src: fullmigration,
      alt: "Full migration",
      style: {
        maxHeight: 350,
        maxWidth: '80vw'
      }
    }), "\n", _jsxs(_components.h3, {
      children: ["Our ", _jsx(_components.strong, {
        children: "Problem"
      })]
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide7(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    h3: "h3",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(Image, {
      src: filesSmall,
      style: {
        maxHeight: 300
      }
    }), "\n", _jsxs(_components.h3, {
      children: ["Migrating: ", _jsx(_components.strong, {
        children: "What we see"
      })]
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide8(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    h3: "h3",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(Image, {
      src: filesBig,
      style: {
        maxHeight: 500
      }
    }), "\n", _jsxs(_components.h3, {
      children: ["Reality: ", _jsx(_components.strong, {
        children: "What we have to change"
      })]
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide9(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    h2: "h2",
    p: "p",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(_components.h2, {
      children: _jsx(_components.strong, {
        children: "From v5 to v8"
      })
    }), "\n", _jsx(Side, {
      children: _jsxs(ItemsColumn, {
        children: [_jsx(_components.p, {
          children: "First v5 to v6, then v6 to v7, then v7 to v8?"
        }), _jsx(_components.p, {
          children: "Nope..."
        }), _jsx(_components.p, {
          children: "v5 to v8, faster (and simpler)"
        })]
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide10(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    h3: "h3",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(Image, {
      src: incrementalMigration,
      alt: "Incremental migration",
      style: {
        maxWidth: '80vw',
        maxHeight: 250
      }
    }), "\n", _jsx(_components.h3, {
      children: _jsx(_components.strong, {
        children: "Incremental Migration"
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide11(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    h3: "h3",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(Image, {
      src: step1,
      style: {
        maxHeight: 300,
        marginBottom: '3rem'
      }
    }), "\n", _jsxs(_components.h3, {
      children: ["Create a ", _jsx(_components.strong, {
        children: "new package in monorepo"
      })]
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide12(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    h3: "h3",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(Image, {
      src: step2,
      style: {
        maxHeight: 400,
        marginBottom: '3rem'
      }
    }), "\n", _jsxs(_components.h3, {
      children: ["Migrate models ", _jsx(_components.strong, {
        children: "one by one"
      }), " to this new library."]
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide13(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"sidedCode"} };
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(_components.h2, {
      children: _jsx(_components.strong, {
        children: "No Monorepo?"
      })
    }), "\n", _jsx(Appear, {
      children: _jsx(_components.p, {
        children: "npm aliases"
      })
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-json",
        children: "// @step showLines(1-5)\n{\n  \"dependencies\": {\n    \"mongoose-future: \"npm:mongoose@^8.0.0\",\n  }\n}\n"
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide14(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    h2: "h2",
    p: "p",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(_components.h2, {
      children: _jsx(_components.strong, {
        children: "Does it work?"
      })
    }), "\n", _jsx(Side, {
      children: _jsxs(ItemsColumn, {
        children: [_jsx(_components.p, {
          children: "mongoose v5 ➡️ v8 ✅"
        }), _jsx(_components.p, {
          children: "react query v2 ➡️ v5 ✅"
        })]
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide15(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    h2: "h2",
    p: "p",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(_components.h2, {
      children: _jsx(_components.strong, {
        children: "Downsides"
      })
    }), "\n", _jsx(Side, {
      children: _jsxs(ItemsColumn, {
        children: [_jsx(_components.p, {
          children: "mongoose: number of connections to the database x2"
        }), _jsxs(_components.p, {
          children: ["react query: two caches/clients in memory", _jsx("br", {}), "\nbundle size"]
        })]
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide16(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsxs(_components.h2, {
      children: ["Migrating to ", _jsx(_components.strong, {
        children: "TypeScript"
      })]
    }), "\n", _jsx(Appear, {
      children: _jsx(_components.p, {
        children: "Reality: we already had TypeScript"
      })
    }), "\n", _jsx(Appear, {
      children: _jsxs(_components.p, {
        children: ["With ", _jsx(_components.code, {
          children: "strict: false"
        }), " 🤦"]
      })
    }), "\n", _jsx(Side, {
      children: _jsxs(ItemsColumn, {
        children: [_jsx(_components.p, {
          children: "TypeDefs"
        }), _jsxs(_components.p, {
          children: ["JSDoc & ", _jsx(_components.code, {
            children: "@deprecated"
          })]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "https://github.com/allegro/typescript-strict-plugin",
            children: "typescript-strict-plugin"
          }), "\n", _jsx(_components.em, {
            children: "allow to run with strict enabled on a subset of files"
          })]
        }), _jsx(_components.p, {
          children: "Move code from big to TS files bits by bits."
        }), _jsx(_components.p, {
          children: "Patience"
        })]
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide17(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    h2: "h2",
    p: "p",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsxs(_components.h2, {
      children: [_jsx(_components.strong, {
        children: "Methodology"
      }), " & ", _jsx(_components.strong, {
        children: "Lessons learnt"
      })]
    }), "\n", _jsx(Side, {
      children: _jsxs(ItemsColumn, {
        children: [_jsx(_components.p, {
          children: "Measure"
        }), _jsx(_components.p, {
          children: "Communicate on Progress"
        }), _jsx(_components.p, {
          children: "Isolate dependencies"
        }), _jsxs(_components.p, {
          children: ["Add ", _jsx(_components.strong, {
            children: "Strict"
          }), " TypeScript"]
        }), _jsxs(_components.p, {
          children: ["Add ", _jsx(_components.strong, {
            children: "Integration"
          }), " tests"]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Change Management"
          }), " must be in Team Culture"]
        })]
      })
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide18(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    h2: "h2",
    ..._provideComponents(),
    ...props.components
  };
  const _content =    _jsx(_components.h2, {
    children: "Questions ?"
  });;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

 
export function Slide19(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    h3: "h3",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const _content =   [_jsx(_components.h3, {
      children: _jsx(_components.strong, {
        children: "Thanks 🙏"
      })
    }), "\n", _jsx(Image, {
      src: feedbackQR,
      alt: "Feedback QR",
      style: {
        maxHeight: 300,
        marginBottom: '2rem'
      }
    }), "\n", _jsxs(_components.h3, {
      children: [_jsx(_components.strong, {
        children: "Feedback"
      }), " ⬆️"]
    })] ;
  const {wrapper: MDXLayout} = _components;
   return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _content
  }) : _content;
}

  
export default function Deck() {
  };
Deck.metadata = {"author":"Gabriel","title":"Crossing the bridge","summary":"Sur ma dernière mission, j'ai mené plusieurs chantiers de modernisation d'une stack front et back existante : mises à jour des versions de librairies (mongoose/mongodb, react query, webpack -> vite etc.) et continuer la conversion d'une code base JS/TS non strict vers TypeScript strict. Ce talk est donc un REX sur la gestion du changement technique d'un projet et fournis des pistes de pour réaliser les mises à jour des librairies tierces et migrer son code de JavaScript vers TypeScript sans accroc. The main idea: you can always do gradual migrations\n","tags":["javascript","typescript","migration","modernisation","librairies"],"outline":"- What I do - What is this about? - Why is it important? (Why should you care?) DX, Developer Retention,\n  Security, Maintenance, Performance (ecosystem is going really fast)\n\n- Some key figures: \n  - the project: 180k when I arrived, 260k one year later \n  - 1 front, 20+ microservices/gateways\n  - team: between 3 and 6 people\n  - 3 major migrations: \n    - mongoose/mongodb\n    - react-query\n    - webpack -> vite\n  - custom webpack to vite. \n- Lessons learnt (isolate dependencies as much as possible, change management\n  should be part of the culture, integration tests > unit tests, typescript)\n"};
Deck.slides = [
  {
      metadata: {"layout":"mainSection"},
      slideComponent: Slide0
    },{
      metadata: {"layout":"sidedImage","position":"left"},
      slideComponent: Slide1
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide2
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide3
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide4
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide5
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide6
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide7
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide8
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide9
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide10
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide11
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide12
    },{
      metadata: {"layout":"sidedCode"},
      slideComponent: Slide13
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide14
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide15
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide16
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide17
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide18
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide19
    }
]
  
  