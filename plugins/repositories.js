import createRepository from '~/repositories/Repository'

class FakeClassForDepencencyInjection {
    constructor(fake) {
        this.fake = fake || 'Just an example'
    }
}

export default async(_, inject) => {
    const fakeClassForDepencencyInjection = new FakeClassForDepencencyInjection('fake')
    inject('repositories', createRepository(fakeClassForDepencencyInjection))
}