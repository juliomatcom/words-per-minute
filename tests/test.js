const assert = require('assert')
const getMinutesFromText = require('../src/lib/words-per-minute.js').getMinutesFromText

describe('words-per-minute', function () {
  describe('#getMinutesFromText()', function () {

    it('smallest text', function () {
      let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      let actual = getMinutesFromText(text)
      let expected = 1
      assert.equal(actual, expected, 'should return 1 min')
    })

    //https://medium.com/@megbarclay/a-letter-to-my-parents-on-blacklivesmatter-eb170afdde27#.w9bxeeotk
    it('BlackLivesMatter text', function () {
      let text = 'A Letter to My Parents on BlackLivesMatter' +
                  'I see you.' +
                  'You are afraid. Violence is frightening. Chaos more so.' +
                  'More than anything, you crave order. Everything, everyone, in their place.' +
                  'How do I know? You told me often enough, “Know your place.”' +
                  'You dispair because you see the order, which you believe to be your country, falling apart. I know, because you told me. You fear a future you cannot imagine, a future you may never see.' +
                  'I remember when you called me, afraid. It was when my neighborhood was burning. I was standing at the third floor window watching the flames as they moved closer and closer, an inferno engulfing lives and property, moving like a wall, a conflagration caused, not by nature, but by man, by the drive for order, by the Philadelphia police.' +
                  'This is what happens when you hate your neighbors enough: Eleven dead, five of them children; 65 homes destroyed.' +
                  'You asked me how close the fire was. It was close, just a few blocks away. You asked what I would do if it came to me, engulfed the city. “I guess if it comes to it, we can jump in the river,” I said. I have always trusted nature.' +
                  'You live on the bright side of a one-way mirror. You only see your own reflection. Your surroundings are peace and security.' +
                  'On the dark side is a parallel universe peopled by others who can see you. They see you staring contentedly at your own reflection. They have been shouting at you, but you do not hear them. The noise from your TV news drowns them out. They have neither peace nor security.' +
                  'Now they are banging at the mirror with hammers and fists. You don’t like what you see. You say your reflection is distorted. You wish it would stop. You wish you could be left in peace in your house of glass. Order, you say, must be restored.' +
                  'Whose order? Nature’s or man’s?' +
                  'I sit today on the bank of another river writing this letter. The river is almost dry. The trees cry out for rain, but the heavens are silent. Just a sun burning down day after day.' +
                  'Order without change is death.' +
                  'It’s OK to be afraid. Change is frightening. But change is inevitable. It has happened before. The Union is bigger than your imagination.' +
                  'With love,' +
                  'Meg'
      let actual = getMinutesFromText(text)
      let expected = 2
      assert.equal(actual, expected, 'it should take 2 mins')
    })

    //https://medium.com/open-society-foundations/death-and-happy-talk-e198505a6f51#.5fvz9l7nl
    it('Death and Happy Talk text', function () {
      let text = 'This has been a week of exasperation over the relentless killing of innocents. The problem is that different people are exasperated by different killings.' +
                 'This week, U.S. Secretary of State John Kerry unleashed an uncharacteristically undiplomatic tirade at the United Nations over the bombings in Syria. “How can people go sit at a table with a regime that bombs hospitals and drops chlorine gas again and again and again and again and again and again, and acts with impunity?” asked the secretary of state. “Are you supposed to sit there and have happy talk in Geneva under those circumstances when you’ve signed up to a ceasefire and you don’t adhere to it? What kind of credibility do you have with any of your people?”' +
                 'Kerry was talking about the Syrian government, and its bombing campaign against its own civilian population. But his outrage might give white America and the world as a whole a glimpse into the exasperation of black America at the killings this week in Tulsa, Oklahoma, and in Charlotte, North Carolina, and earlier in Baton Rouge, Baltimore, Charleston, Chicago, Cleveland, Dallas, Ferguson, Staten Island, and more. How can black Americans remain patient and polite with a police establishment that shoots black men and black boys again and again and again and again? Is black America supposed to sit there and have happy talk with the officials responsible for so many deaths?' +
                 'The parallels go deeper than you might at first imagine. Those who kill innocents rarely do so sadistically. There are always excuses and explanations, stretching notions of self-defense, exaggerating threats, claiming mistaken identities: We didn’t know the building was a hospital; we didn’t know he was just holding a wallet. And if it only happened once, or twice, or even three times, those excuses might be acceptable. But John Kerry’s exasperation is captured in his repetition of again and again and again and again and again and again. In that dramatic lament at the UN, he echoes the exasperation of so many Americans of color across the United States.' +
                 'Earlier this year, on the occasion of another U.S. police killing of a black man, a colleague at the Open Society Foundations made a simple suggestion: how about disarming the police? There are many countries, she pointed out, where most police patrol without guns. Wouldn’t taking the guns away stop the killing?' +
                 'At the time, I thought the suggestion was provocative but unrealistic. And then I heard the secretary of state propose a no-fly zone over parts of Syria to protect civilians — a proposal that has been repeatedly rejected as unrealistic. Still, he felt he had to say it anyway. The subtext was clear: we are being driven to extremes. It seems that if you get sufficiently exasperated, you might start thinking about extremes, like putting the weapons away.' +
                 'John Kerry was speaking this week out of exasperation. Yet we all know he’ll soon be back at the table in Geneva. The same is true here at home with our police killings: There will be more investigations, commission reports, and training programs. We’ll be back at the table. More happy talk.' +
                 'But that’s where the parallels should end. No simple alchemy of military and diplomatic engagement will end the carnage in Syria. But things should be more straightforward in the United States. We’re not talking about a regime dropping bombs from the sky, but police officers shooting people up close, people whose individual appearance, whose blackness, is part of what leads to the killing. If we can share the anger, and feel the pain, then we can find the strength to change, to embrace our common humanity, to stop the killing.' +
                 'At the Open Society Foundations, we’re investing in a three-part strategy: supporting local activists, supporting reformers within law enforcement, and building a new institution to bridge national resources and expertise with local energy and commitment. We have to do more than try — we have to succeed. That’s what it takes to restore credibility with any of your people.'
      let actual = getMinutesFromText(text)
      let expected = 3
      assert.equal(actual, expected, 'should return 3 min')
    })
  })
})
